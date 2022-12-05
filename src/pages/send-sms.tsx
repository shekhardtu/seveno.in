import axios from 'axios';
import { useState } from 'react';

import BreadCrumb from '@/components/BreadCrumb';
import { Main } from '@/templates/Main';

const SendSms = () => {
  const onlyInteger = (e: any) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };
  const [mobileNumber, setMobileNumber]: [any, any] = useState();
  const [message, setMessage]: [any, any] = useState();
  const [buttonText, setButtonText] = useState('Send');

  function sendSmsText(e: any): void {
    const baseUrl = 'https://sevenoin.herokuapp.com/api/v1/identifier/send-sms';
    const payload = {
      mobileNumber: `+91${mobileNumber}`,
      message,
    };

    axios.post(baseUrl, payload).then(() => {
      setButtonText('Sent');
    });

    e.preventDefault();
  }

  return (
    <Main>
      <BreadCrumb path="Send SMS" />
      <div className="flex justify-center p-20 relative">
        <div className="max-w-xl lg:max-w-3xl">
          <form action="#" className="mt-4 grid grid-cols-6 gap-6">
            <div className="col-span-10">
              <label
                htmlFor="Subject"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>

              <input
                type="text"
                id="Subject"
                name="subject"
                maxLength={10}
                onKeyPress={onlyInteger}
                onChange={(e) => {
                  setButtonText('Send');
                  setMobileNumber(e.target.value);
                }}
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-10">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                onChange={(e) => {
                  setButtonText('Send');
                  setMessage(e.target.value);
                }}
                className="h-20 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              ></textarea>
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                onClick={sendSmsText}
                className="inline-block shrink-0 rounded-md border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-blue-500"
              >
                {buttonText} Message
              </button>
            </div>
            <div className="col-span-6 sm:flex sm:items-center sm:gap-0 text-green-500 text-sm">
              {buttonText === 'Sent' && 'Your message is sent'}
            </div>
          </form>
        </div>
      </div>

      {/* <SendSms /> */}
    </Main>
  );
};

export default SendSms;
