import React, { useState } from 'react';
import { MessageSquareIcon, PhoneIcon, MailIcon, SendIcon, ClockIcon, FileTextIcon, HelpCircleIcon } from 'lucide-react';
export const ContactSupport = () => {
  const [category, setCategory] = useState('technical');
  const [priority, setPriority] = useState('medium');
  return <div>
      <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-lg p-4 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <PhoneIcon size={24} className="text-blue-600" />
          </div>
          <h3 className="font-medium mb-1">Phone Support</h3>
          <p className="text-gray-600 text-sm mb-3">
            Available 9 AM - 6 PM IST, Monday to Friday
          </p>
          <p className="font-medium">+91 1800 123 4567</p>
        </div>
        <div className="border rounded-lg p-4 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <MailIcon size={24} className="text-blue-600" />
          </div>
          <h3 className="font-medium mb-1">Email Support</h3>
          <p className="text-gray-600 text-sm mb-3">
            24/7 support with response within 24 hours
          </p>
          <p className="font-medium">support@powerpredict.in</p>
        </div>
        <div className="border rounded-lg p-4 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <MessageSquareIcon size={24} className="text-blue-600" />
          </div>
          <h3 className="font-medium mb-1">Live Chat</h3>
          <p className="text-gray-600 text-sm mb-3">
            Available 24/7 for immediate assistance
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Start Chat
          </button>
        </div>
      </div>
      <div className="bg-gray-50 border rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Submit a Support Ticket</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Your email address" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="technical">Technical Issue</option>
                <option value="account">Account Management</option>
                <option value="billing">Billing & Subscription</option>
                <option value="data">Data & Integration</option>
                <option value="feature">Feature Request</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md" value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="low">Low - General Question</option>
                <option value="medium">Medium - Issue Affecting Work</option>
                <option value="high">High - Serious Problem</option>
                <option value="critical">Critical - System Down</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Brief description of your issue" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={5} placeholder="Please provide as much detail as possible about your issue"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Attachments
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FileTextIcon size={24} className="text-gray-400 mb-2" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-medium">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, PDF or CSV (max. 10MB)
                  </p>
                </div>
                <input type="file" className="hidden" multiple />
              </label>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 text-blue-600" id="updates" />
            <label htmlFor="updates" className="text-sm text-gray-700">
              Send me email updates about my support request
            </label>
          </div>
          <div className="pt-4">
            <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center">
              <SendIcon size={16} className="mr-2" />
              Submit Support Ticket
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Support Hours & SLAs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <ClockIcon size={20} className="text-blue-600" />
              <h4 className="font-medium">Support Hours</h4>
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Phone Support</td>
                  <td className="py-2">9 AM - 6 PM IST, Monday to Friday</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Email Support</td>
                  <td className="py-2">24/7, response within 24 hours</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Live Chat</td>
                  <td className="py-2">24/7</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Emergency Support</td>
                  <td className="py-2">24/7 for critical issues</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircleIcon size={20} className="text-blue-600" />
              <h4 className="font-medium">Response Time SLAs</h4>
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Critical Priority</td>
                  <td className="py-2">1 hour response time</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">High Priority</td>
                  <td className="py-2">4 hour response time</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Medium Priority</td>
                  <td className="py-2">8 hour response time</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Low Priority</td>
                  <td className="py-2">24 hour response time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
};