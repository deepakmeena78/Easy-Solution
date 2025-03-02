import React, { useEffect, useState } from "react";
import "../../App.css";

const HelpImage = () => {
    const [help, setHelp] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=3") // Fetching 5 images
            .then((response) => response.json())
            .then((value) => {
                setHelp(value.results);
                setSelectedImage(value.results[0]); // Set first image as default large image
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    const handleImageClick = (clickedImage) => {
        // Swap the selected image with the clicked small image
        const updatedImages = help.map((img) => 
            img === clickedImage ? selectedImage : img
        );
        setHelp(updatedImages);
        setSelectedImage(clickedImage);
    };

    return (
        <div className="container mx-auto p-6 flex flex-col items-center rounded-lg shadow-md shadow-black/30">
            {selectedImage && (
                /* Large Image at the Top */
                <div className="relative w-full max-w-xl h-64 overflow-hidden rounded-lg shadow-md shadow-black/30 bg-[var(--light-blue)]">
                    <img
                        src={selectedImage.picture?.large}
                        alt={`${selectedImage.name?.first} ${selectedImage.name?.last}`}
                        className="rounded-lg w-full h-64 object-cover"
                    />
                </div>
            )}

            {/* Small Images Below */}
            <div className="grid grid-cols-4 gap-4 mt-4">
                {help.filter(img => img !== selectedImage).map((person, index) => (
                    <div 
                        key={index} 
                        className="relative w-24 h-24 overflow-hidden rounded-lg shadow-md shadow-black/30 bg-[var(--light-blue)] cursor-pointer"
                        onClick={() => handleImageClick(person)}
                    >
                        <img
                            src={person.picture?.thumbnail}
                            alt={`${person.name?.first} ${person.name?.last}`}
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HelpImage;
