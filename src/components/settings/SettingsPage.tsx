import React, { useState, Component } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './TabComponents';
import { ProfileSettings } from './ProfileSettings';
import { NotificationSettings } from './NotificationSettings';
import { DataSettings } from './DataSettings';
import { AppearanceSettings } from './AppearanceSettings';
import { APISettings } from './APISettings';
import { RegionalSettings } from './RegionalSettings';
import { ModelSettings } from './ModelSettings';
import { AlertSettings } from './AlertSettings';
export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  return <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">
          Manage your account and application preferences
        </p>
      </div>
      <div className="bg-white rounded-lg shadow">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="border-b">
            <TabsList className="flex overflow-x-auto">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="data">Data & Integration</TabsTrigger>
              <TabsTrigger value="regional">Regional Settings</TabsTrigger>
              <TabsTrigger value="models">Forecast Models</TabsTrigger>
              <TabsTrigger value="alerts">Alert Configuration</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="api">API Access</TabsTrigger>
            </TabsList>
          </div>
          <div className="p-6">
            <TabsContent value="profile">
              <ProfileSettings />
            </TabsContent>
            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>
            <TabsContent value="data">
              <DataSettings />
            </TabsContent>
            <TabsContent value="regional">
              <RegionalSettings />
            </TabsContent>
            <TabsContent value="models">
              <ModelSettings />
            </TabsContent>
            <TabsContent value="alerts">
              <AlertSettings />
            </TabsContent>
            <TabsContent value="appearance">
              <AppearanceSettings />
            </TabsContent>
            <TabsContent value="api">
              <APISettings />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>;
};