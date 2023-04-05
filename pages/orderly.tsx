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
      text = `<p>I proficiently implemented the deployment of our Node.js server and Postgres database by utilizing a robust infrastructure platform called Railway. The seamless deployment of the server from my Github repository was facilitated with ease. Similarly, the creation of the Postgres database was completed expeditiously with the mere click of two buttons. I successfully integrated our domain name, app.orderly.pro, procured via Namecheap, with our server by accessing the settings and appending the requisite DNS configuration data. I followed this same process when deploying the frontend through Vercel.</p></br><p>Vercel</p></br><img src="/vercel-orderly.png"/></br></br><p>Railway App</p></br><img src="/orderly-railway.png"/>`;
    }
    if (option === 2) {
      title = 'Email verification';
      text = `<p>I implemented email verification to authenticate the user's credentials and prevent spam attacks. Take a look at the code below to view this setup.</p</br><p style="margin-top: 10px;">During the registration process a JWT token is created and sent to the user via email. The email is transported to the client using an API called nodemailer.</p></br><img src="/carbon4.png"/></br><p>The client will be routed back to the server after opening their email and selecting the confirmation link. The confirmed field will be updated to true and the client will be redirected to the login page. When the user logs in after confirming their email, the server will query the database and see the confirmation data field is set to true</p></br><img src="/carbon5.png"/>`;
    }
    if (option === 3) {
      title = 'Thirdweb API';
      text = `<p>Thirdweb is a web3 development framework that allows users the ability to easily build, manage, and anaylze web3 applications. I used Thirdweb to construct most of the web3 features in my application. Below you will find examples of just a few methods I used from the Thirdweb API:</p></br><p>I used the deployNFTCollection() method to deploy a new NFT contract.</p><br/><img src="/carbon9.png"/></br><p>I used the direct.createListing() method to list the NFT on the marketplace for other users to purchase.</p></br><img src="/carbon10.png"/>`;
    }
    if (option === 4) {
      title = 'Image upload, display and save';
      text = `<p>Uploading, displaying and saving images was a necessary feature for my application. In order to create an NFT or collection the user needs the ability to upload images. Adding a profile photo required the user to save their image to the database. Take a look at the code below to view how I set this up. </p></br><p>On the profile page the user can set their profile image. The profileImage variable contains two properties; preview and raw.</p><img  src="/carbon6.png"/></br><p>The handlePhotoChange function sets the profile image. The preview property takes the image file and converts it to a URL. The preview image will be displayed immediately before saving the photo to the server's upload folder.</p></br><img  src="/carbon7.png"/></br><p>Let's now take a look at the code inside submit(). The formData variable creates a new FormData object and this object contains the data that will be sent to the server. The reason for creating a FormData object is to make sure that the data sent to the server are encoded as Content-Type: multipart/form-data. Multipart/form-data makes it possible to send files to the server. The submit() function saves the image to the uploads folder on the server.</p></br><img src="carbon8.png"/>`;
    }
    if (option === 5) {
      title = 'Server, ORM, and Docker utilization';
      text = `<p>Setting up the server, ORM, and Docker was one of the more difficult tasks I ran into while developing this application. Take a look at the code below to see how I set up these components.</p></br><p>I set up the server using NodeJS and Express. The server contains three main routes; userAuth, marketItems and uploads. UserAuth handles the user logic such as signing in and setting up a new account. MarketItems handles all the logic related to NFTs, collections, image uploads, and transaction data. The uploads routes tells the server where to store image uploads.</p></br><img src="carbon11.png"/></br><p>I used Prisma as my ORM to handle data modeling. Below you can view the Prisma scheme.</p></br><img src="carbon12.png"/></br><p>Setting up Docker was fairly straightforward. You will notice that in the Dockerfile displayed below, I used the command "npx prisma generate" to initialize my database using the prisma scheme displayed in the previous code block.</p></br><img src="carbon13.png"/>`;
    }
    if (option === 6) {
      title = 'Smart Contracts, Solidity';
      text = `<p>On the homepage, I added a feature that gives the user the ability to transfer funds from one crypto account to another. I put in place a smart contract using Solidity to manage this functionality. The user inputs the address of the account they wish to transfer their funds to, the amount of funds they want to transfer, a keyword used to pull a gif from "https://api.giphy.com", and a message that can been seen by the receiving account.</p></br><img style="margin: auto;" src="transactionInput.png"/></br><p>Below you can view the smart contract I created to handle the transfer of funds.</p></br><img src="carbon14.png"/>`;
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
                Email verification
              </button>
              <button
                className="border-2 border-[#3B9893] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#3B9893]"
                onClick={() => messagePop(3)}
              >
                Thirdweb API
              </button>
              <button
                className="border-2 border-[#3B9893] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#3B9893]"
                onClick={() => messagePop(4)}
              >
                Image upload, display and save
              </button>
              <button
                className="border-2 border-[#3B9893] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#3B9893]"
                onClick={() => messagePop(5)}
              >
                Server, ORM, and Docker utilization
              </button>
              <button
                className="border-2 border-[#3B9893] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#3B9893]"
                onClick={() => messagePop(6)}
              >
                Smart Contracts, Solidity
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
