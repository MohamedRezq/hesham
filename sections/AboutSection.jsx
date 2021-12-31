import Image from "next/image";
import authorImg from "assets/author.jpg";

const AboutSection = () => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="relative w-full md:w-1/3 flex justify-center content-center py-6">
        <div className="bg-cyan-900 h-52 w-2/3 md:h-2/3 my-auto"></div>
        <div className="absolute bottom-12 right-12 rounded-full flex content-center justify-center box-content border-4 border-white">
          <Image
            src={authorImg}
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="md:w-2/3 px-8 relative py-6 my-6">
        <div className="absolute top-0 left-0">
          <i class="fas fa-quote-left"></i>
        </div>
        <div className="text-md italic">
          I can design and develop full websites/RESTful APIs for the enterprise
          products. I developed multiple full-stack websites using MERN stack
          which I believe is the best in terms of high performance and web
          design responsiveness. I got development experience with various
          technologies to keep up with market/client needs, for example:
          Databases (PostgreSQL, MySQL and MongoDB), CSS frameworks (Tailwind,
          Bootsrap, Materialize, Material-UI). I can boost your website rank in
          search engines. I can build effective testing codes to assure
          high-quality and robust web applications. Finally, I have a great
          passion to continously learn new technologies and work with agile
          teams to develop great and scalable web applications.
        </div>
        <div className="absolute bottom-0 right-0">
          <i class="fas fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
