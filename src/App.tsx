import React from 'react';
import './App.css';
import { TopThirtyReportView } from './components/TopThirtyReportView';
import { DistributionByMakeReportView } from './components/DistributionByMakeReportView';
import { TopFiveListingsReportView } from './components/TopFiveListingsReportView';
import { AverageBySellerReportView } from './components/AverageBySellerReportView';
import { UploadButtons } from './components/UploadButtons';

function App() {
  return (
    <div className="App">
      <TopThirtyReportView />
      <DistributionByMakeReportView />
      <TopFiveListingsReportView />
      <AverageBySellerReportView />
      <UploadButtons />
    </div>
  );
}

export default App;
