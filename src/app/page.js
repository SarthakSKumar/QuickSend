'use client';

import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { useState } from 'react';
import 'react-phone-number-input/style.css'; // Import the CSS for PhoneInput
import { BsWhatsapp, BsTelegram, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

export default function Home() {
    const [value, setValue] = useState('');
    const [messenger, setMessenger] = useState('whatsapp');
    const API_URL = messenger === 'whatsapp' ? 'https://wa.me' : 'https://t.me';

    const handleMessengerChange = (newMessenger) => {
        setMessenger(newMessenger);
    };

    const handleSendClick = () => {
        if (isValidPhoneNumber(value)) {
            window.open(`${API_URL}/${value}`, '_blank');
        }
    };

    return (
        <main
            className={`${
                messenger === 'whatsapp'
                    ? `bg-[url('../../public/whatsapp.svg')]`
                    : `bg-[url('../../public/telegram.svg')]`
            } bg-no-repeat bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white`}
        >
            <h1 className='text-6xl font-extrabold mb-24'>QuickSend</h1>
            <div className='mb-8'>
                <button
                    className={`${
                        messenger === 'whatsapp' ? 'bg-green-500' : 'bg-gray-600 hover:bg-green-500'
                    } text-white px-4 py-2 rounded-lg`}
                    onClick={() => handleMessengerChange('whatsapp')}
                >
                    <BsWhatsapp className='inline-block mr-2' />
                    WhatsApp
                </button>
                <button
                    className={`${
                        messenger === 'telegram' ? 'bg-blue-500' : 'bg-gray-600 hover:bg-blue-500'
                    } text-white px-4 py-2 rounded-lg ml-4`}
                    onClick={() => handleMessengerChange('telegram')}
                >
                    <BsTelegram className='inline-block mr-2' />
                    Telegram
                </button>
            </div>
            <div className='w-80'>
                <PhoneInput
                    classNames={{
                        countrySelect: 'my-custom-country-select',
                        input: 'my-custom-input',
                    }}
                    placeholder='Enter phone number'
                    countrySelectProps={{ unicodeFlags: true }}
                    value={value}
                    international
                    error={
                        value
                            ? isValidPhoneNumber(value)
                                ? undefined
                                : 'Invalid phone number'
                            : 'Phone number required'
                    }
                    onChange={setValue}
                    defaultCountry='IN'
                />
                <button
                    className={`${
                        isValidPhoneNumber(value) ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-600'
                    } text-white px-4 py-2 rounded-lg mt-4 w-full`}
                    onClick={handleSendClick}
                    disabled={!isValidPhoneNumber(value)}
                >
                    Send
                </button>
            </div>
            <div className=' absolute bottom-0 w-full flex flex-col items-center p-5 justify-center text-black '>
                <p className=''>
                    &copy; Copyright 2023{' '}
                    <a
                        href='https://github.com/SarthakSKumar/QuickSend'
                        target='_blank'
                    >
                        Sarthak S Kumar
                    </a>
                </p>
                <ul className=' flex gap-x-10 py-2 '>
                    <li>
                        <a
                            href='https://www.linkedin.com/in/sarthakskumar/'
                            target='_blank'
                            className={`hover:text-white`}
                        >
                            <BsLinkedin className=' text-lg hover:scale-110' />
                        </a>
                    </li>
                    <li>
                        <a
                            href=' https://www.github.com/sarthakskumar/'
                            target='_blank'
                            className={`hover:text-white`}
                        >
                            <BsGithub className=' text-lg hover:scale-110' />
                        </a>
                    </li>
                    <li>
                        <a
                            href=' https://www.instagram.com/sarthakskumar'
                            target='_blank'
                            className={`hover:text-white`}
                        >
                            <BsInstagram className=' text-lg hover:scale-110' />
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    );
}
