import React from 'react';

const MaintenancePage: React.FC = () => {
    return (
        <div className="flex items-center justify-center bg-gray-900 h-full">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600">We Are Under Maintenance</h1>
                <p className="mt-4 text-lg text-gray-700">
                    We're currently performing scheduled maintenance. We should be back shortly. Thank you for your patience!
                </p>
                <p className="mt-8 text-gray-500">
                    &copy; {new Date().getFullYear()} Bernard Bereness
                </p>
            </div>
        </div>
    );
};

export default MaintenancePage;
