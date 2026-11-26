import React, { createContext, useContext, useState, useRef, useCallback, ReactNode } from 'react';
import { availableDataSets, DEFAULT_DATASET_ID, ensureDatasetLoaded } from '@/utils/dataManager';

// Define the context type
interface DataContextType {
  currentDataSetId: string;
  availableDataSets: { id: string; label: string; value: string }[];
  setDataSet: (dataSetId: string) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

// Create the context with default values
const DataContext = createContext<DataContextType>({
  currentDataSetId: DEFAULT_DATASET_ID,
  availableDataSets: availableDataSets,
  setDataSet: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
});

// Custom hook to use the data context
export const useDataContext = () => useContext(DataContext);

// Provider component
interface DataProviderProps {
  children: ReactNode;
  initialDataSetId?: string;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children, initialDataSetId }) => {
  const [currentDataSetId, setCurrentDataSetId] = useState<string>(initialDataSetId || DEFAULT_DATASET_ID);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Older datasets are lazy chunks. Switch only once the chunk is in the cache:
  // components read data synchronously and memoize on the id, so switching
  // first would leave them showing the newest dataset under the older date.
  // If requests overlap (fast clicks, playback), only the latest one applies.
  const latestRequest = useRef<string | null>(null);
  const setDataSet = useCallback((dataSetId: string) => {
    if (!availableDataSets.some(ds => ds.id === dataSetId)) return;
    latestRequest.current = dataSetId;
    ensureDatasetLoaded(dataSetId).then(
      () => {
        if (latestRequest.current === dataSetId) setCurrentDataSetId(dataSetId);
      },
      (err) => console.error(`Failed to load dataset ${dataSetId}`, err),
    );
  }, []);

  return (
    <DataContext.Provider
      value={{
        currentDataSetId,
        availableDataSets,
        setDataSet,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
