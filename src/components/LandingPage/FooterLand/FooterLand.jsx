import React from 'react';

const FooterLand = () => {
    return (
        <div>
            <footer className="w-full flex flex-col items-center text-center mt-10 mb-10 bg-blue-400 text-primary-content p-10">
                <aside>
                <p className="font-bold">
                    Online English Language
                    <br />
                    Providing Quality Education since 2025
                </p>
                <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default FooterLand;