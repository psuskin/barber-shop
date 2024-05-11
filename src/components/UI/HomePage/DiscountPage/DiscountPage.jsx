import Image from 'next/image';

const DiscountPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full overflow-y-scroll">
                <h1 className="text-3xl font-bold mb-6">Special Discounts</h1>
                <div className="grid grid-cols-1 gap-6 flex flex-col items-center">
                    <div className="bg-gray-200 p-4 rounded-md w-full flex items-center">
                        <div className="h-16 w-16 rounded-full mr-4 relative">
                            <Image src='/Images/11.jpg' alt="New Customer Discount" layout="fill" objectFit="cover" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-2">New Customer Discount</h2>
                            <p>Get 20% off on your first visit as a new customer.</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md w-full flex items-center">
                        <div className="h-16 w-16 rounded-full mr-4 relative">
                            <Image src='/Images/11.jpg' alt="Student Discount" layout="fill" objectFit="cover" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Student Discount</h2>
                            <p>Students get 15% off on all services with a valid student ID.</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md w-full flex items-center">
                        <div className="h-16 w-16 rounded-full mr-4 relative">
                            <Image src='/Images/11.jpg' alt="Refer a Friend Discount" layout="fill" objectFit="cover" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Refer a Friend Discount</h2>
                            <p>Refer a friend and both of you get 10% off on your next visit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountPage;