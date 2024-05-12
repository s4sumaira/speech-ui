export const DefaultCard = ({ image, date, CardTitle, CardDescription }) => {
    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={image} alt="" className="mb-2 w-full h-64 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold mb-2">{CardTitle}</h3>
                {date && (
                    <span className="mb-2 inline-block rounded bg-primary  text-center text-xs font-semibold leading-loose text-gray-800">
                        {date}
                    </span>
                )}
                <p>{CardDescription}</p>
            </div>
           
        </>
    );
};