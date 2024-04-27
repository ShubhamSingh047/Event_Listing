import React, { useState } from 'react';
import AddActivityForm from './ActivityForm';
import AllEvnets from './AllEvnets';

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // State to track active tab

  // Function to handle tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => handleTabChange('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>Add Event</button>
        <button onClick={() => handleTabChange('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>All Events</button>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <AddEvent />}
        {activeTab === 'tab2' && <ListEvents />}
      </div>
    </div>
  );
};

const AddEvent = () => {
  return <><AddActivityForm /></>;
};

const ListEvents = () => {
  return <><AllEvnets /></>;
};


export default TabSwitcher;
