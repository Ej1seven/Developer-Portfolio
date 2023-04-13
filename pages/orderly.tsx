import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { Footer } from '../components/Footer';

interface orderlyProps {}

export default function Orderly() {
  // const introVideo: any =
  //   typeof document !== 'undefined' && document.getElementById('introVideo');
  // const [showBanner, setShowBanner] = useState(false);
  // useEffect(() => {
  //   introVideo?.addEventListener('ended', () => {
  //     console.log('ended');
  //     setShowBanner(true);
  //   });
  // }, []);
  const messagePop = (option: Number) => {
    let title: any;
    let text: any;
    if (option === 1) {
      title = 'Deployment';
      text = `<p>I implemented the deployment of our Node.js server and Postgres database by utilizing a robust infrastructure platform called Railway. The seamless deployment of the server from my Github repository was facilitated with ease. Similarly, the creation of the Postgres database was completed expeditiously with the mere click of two buttons. I successfully integrated our domain name, app.orderly.pro, procured via Namecheap, with our server by accessing the settings and appending the required DNS configuration data. I followed this same process when deploying the frontend through Vercel.</p></br><p>Vercel</p></br><img src="/vercel-orderly.png"/></br></br><p>Railway App</p></br><img src="/orderly-railway.png"/>`;
    }
    if (option === 2) {
      title = 'CRUD';
      text = `<p>One of the primary responsibilities assigned to me was configuring the multitude of requests and responses required for our server. The server is comprised of six distinct controllers; authentication, company, inventory, orders, settings, and user. The CRUD operations for each controller were systematically categorized and integrated into the routes folder. Below you can view the code for the orders controller and routes files. </p</br><p style="margin-top: 10px;">Orders Controller</p></br><img src="/carbon15.png"/></br><p>Orders Route</p></br><img src="/carbon16.png"/>`;
    }
    if (option === 3) {
      title = 'Prisma and Postgres';
      text = `<p>In the project's planning phase, the team recognized the need for a database to store different types of data to ensure success. Based on my experience, I suggest utilizing Prisma as our ORM because it is user-friendly and integrates well with Postgres databases. One of the challenges we encountered during the database and table setup was determining as a team which data should be included in each table and how to structure our queries. You can find the database schema we agreed upon and the Railway tables after completing the database migration below.</p></br><p>Prisma Schema</p><br/><img src="/carbon17.png"/></br><p>Postgres Tables</p></br><img src="/PostgresTables.png"/>`;
    }
    if (option === 4) {
      title = 'CSV File Upload';
      text = `<p>Recognizing the importance of adding inventory to our application, I proposed a solution to improve user efficiency by implementing a CSV upload feature. This idea stemmed from the realization that uploading a significant number of products individually would be impractical. With the CSV upload option, users can now add multiple products at once.</p></br><p>The sendCSVfile function located on the frontend is responsible for accepting the csv file selected by the end user and converting it into form data. After the conversion process, the data is transmitted to the inventory/upload path on the server.</p></br><img  src="/carbon18.png"/></br><p>Using the upload method, the convertCsvFileToJson POST request saves the CSV file to the uploads folder. After saving the file, I utilized an npm package named csvtojson for the purpose of transforming the CSV file into JSON format.</p></br><img  src="/carbon19.png"/></br><p>By utilizing the sendCSVfile function, the JSON data is passed to the createManyInventoryItems method, which in turn dispatches a POST request to the server's inventory/bulk endpoint.</p></br><img  src="/carbon20.png"/></br><p>Prisma's createMany command is utilized by the createManyInventoryItems endpoint to process the product list and create each product within a single transaction.</p></br><img src="carbon21.png"/>`;
    }
    if (option === 5) {
      title = 'Authentication';
      text = `<p>Users are authenticated at login when the access and refresh tokens are generated.</p></br><img src="carbon22.png"/></br><p>Users data is stored in the JWT, which can be accessed by various components throughout the application. To authenticate users as needed, I employed react-query to query the server's Redis cache. In the event that the access token has expired, the user will be redirected to the login page.</p></br><img src="carbon23.png"/></br>`;
    }
    if (option === 6) {
      title = 'Pop-ups';
      text = `<p>One of the significant contributions I made was incorporating pop-ups in appropriate sections of the application. Initially, I underestimated the number of components that required pop-ups. To develop these pop-ups, I utilized the npm package sweetalert2 and also included personalized data and styling. Displayed below are several instances of the pop-ups I integrated.</p></br><p>This is an example of an error pop-up that appears if a user leaves a field empty while adding a product.</p></br><img style="margin: auto;" src="carbon24.png"/></br><p>This is an example of a pop-up that exhibits user details when the user icon on the sidebar is clicked.</p></br><p><img style="margin: auto;" src="carbon25.png"/></p></br><p>This is an example of an error pop-up that appears when a user uploads a CSV file that lacks a field.</p></br><img style="margin: auto;" src="carbon26.png"/>`;
    }
    return Swal.fire({
      icon: 'info',
      title: title,
      html: text,
      background: '#091310',
      width: '100%',
      color: '#fff',
      customClass: {
        // <------ customClass is an object!
        popup: 'orderly-popup',
      },
      confirmButtonColor: '#3B9893',
    });
  };

  return (
    <div className="text-white overflow-hidden">
      <div className="w-full h-20 flex items-center text-[#FAF9F6] ease-in duration-500">
        <Link
          href="/"
          className="text-bold text-5xl w-1/4 text-glow cursor-pointer pl-12"
        >
          E.DEV
        </Link>
      </div>
      <div className="w-full max-w-[900px] flex justify-center p-8 mx-auto">
        <div className="w-full flex flex-col relative">
          <div className="relative">
            <img className="w-full rounded-md" src="/Orderly.png" />
            <div className="sm:w-1/3 md:w-1/4 absolute bottom-0 right-0 m-[1px] m-[5px] xsm:m-2 sm:mb-2 md:mb-4 xsm:h:8 sm:h-12 md:h-16 absolute bottom-0 right-0 flex justify-center">
              <a
                href="https://orderly.pro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-32 md:w-full bg-[#091310] text-[8px] xsm:text-xs sm:text-sm md:text-base p-1 xsm:p-2 max-w-[150px] rounded-md">
                  Visit Website
                </button>
              </a>
            </div>
          </div>
          <div className="w-full mt-16">
            <p className="text-sm md:text-base">
              Danny Thompson and Scott Thompson of Dallas Software Developers
              orchestrated this cohort, an initiative aimed at supporting every
              developer, regardless of their level of experience, on their
              unique journey. For developers just starting out or those with a
              wealth of experience, Dallas Software Developers hosts various
              meetups, providing a supportive community for all. Orderly is an
              automated inventory management application, designed to allow
              store owners the ability to place orders automatically as their
              stock levels approach a designated percentage of maximum capacity.
              Clayton Breland, Joshua Ow, and I, Erik Hunter, collaborated to
              develop this application. Below I have highlighted my direct
              contributions to the project.
            </p>
            <div className="mt-8 w-full grid gap-2 grid-cols-2">
              <button
                className="border-2 border-[#3B9893] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#3B9893]"
                onClick={() => messagePop(1)}
              >
                Deployment
              </button>
              <button
                className="border-2 border-[#3B9893] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#3B9893]"
                onClick={() => messagePop(2)}
              >
                CRUD
              </button>
              <button
                className="border-2 border-[#3B9893] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#3B9893]"
                onClick={() => messagePop(3)}
              >
                Prisma and Postgres
              </button>
              <button
                className="border-2 border-[#3B9893] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#3B9893]"
                onClick={() => messagePop(4)}
              >
                CSV File Upload
              </button>
              <button
                className="border-2 border-[#3B9893] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#3B9893]"
                onClick={() => messagePop(5)}
              >
                Authentication
              </button>
              <button
                className="border-2 border-[#3B9893] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#3B9893]"
                onClick={() => messagePop(6)}
              >
                Pop-ups
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
