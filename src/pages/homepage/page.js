import Image from "next/image";
import image1 from ".../assets/maharastra.png";
import image2 from ".../assets/meghalaya.png";
import image3 from ".../assets/puducheri.png";
import image4 from ".../assets/tamilnadu.png";
import image5 from ".../assets/jamu&kas.png";
import image6 from ".../assets/andhra pra.png"
import image7 from ".../assets/arunachal p.png"
import image8 from ".../assets/asam.png"
import image9 from ".../assets/chandigardh.png"
import image10 from ".../assets/chhatisgardh.png"
import image11 from ".../assets/Daman and diu.png"
import image12 from ".../assets/delhi.png"
import image13 from ".../assets/goa.png"
import image14 from ".../assets/gujrat.png"
import image15 from ".../assets/haryana.png"

// List of images
const images = [image1, image2, image3,image4, image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15];

const HomePage=() =>{
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      {/* First Child */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-4">
          Get all information related to Govt schemes for SC/ST community at one
          place
        </h1>
        <p className="text-lg">
          Your one stop solution for all information related to your state's
          govt schemes, scholarships, and job openings.
        </p>
      </div>

      {/* Second Child */}
      <div className="flex flex-row items-center justify-center my-40">
        <div
          className="flex items-center justify-center flex-1 mx-4 h-[140px] w-[250px]"
          style={{
            backgroundColor: `rgba(228, 102, 237, ${0.3})`,
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <h1 className="text-black">Schemes</h1>
        </div>
        <div
          className="flex items-center justify-center flex-1 mx-4 h-[140px] w-[250px]"
          style={{
            backgroundColor: `rgba(107, 149, 227, ${0.3})`,
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <h1>Job Postings</h1>
        </div>
        <div
          className="flex items-center justify-center flex-1 mx-4 h-[140px] w-[250px]"
          style={{
            backgroundColor: `rgba(156, 163, 90, ${0.3})`,
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <h1>Scholarships</h1>
        </div>
      </div>

      {/* Third Child */}
      <div className="flex flex-wrap justify-center mt-auto">
        {images.map((image, index) => (
          <div key={index} className="m-4">
            <Image src={image} alt={`Image ${index + 1}`} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>

    );
}

export default HomePage;