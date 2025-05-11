import { create } from "zustand";
import { Metric } from "./types/metric";

type MetricStore = {
  metrics: Metric[];
  selectedModel: string | null;
  actions: {
    toggleMetric: (id: string) => void;
    updateWeight: (id: string, weight: number) => void;
    setModel: (modelId: string) => void;
  };
};

export const useMetricStore = create<MetricStore>((set) => ({
  metrics: initialMetrics,
  selectedModel: null,
  actions: {
    toggleMetric: (id) =>
      set((state) => ({
        metrics: state.metrics.map((m) =>
          m.id === id ? { ...m, selected: !m.selected } : m
        ),
      })),
    updateWeight: (id, weight) =>
      set((state) => ({
        metrics: state.metrics.map((m) => (m.id === id ? { ...m, weight } : m)),
      })),
    setModel: (modelId) => set({ selectedModel: modelId }),
  },
}));
