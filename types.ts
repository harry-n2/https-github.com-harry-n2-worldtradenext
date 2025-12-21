
export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export interface MetricData {
  label: string;
  before: number;
  after: number;
  unit: string;
}

export interface BaseModule {
  id: number;
  name: string;
  description: string;
  details: string;
}