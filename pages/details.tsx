import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

interface detailsProps {}

export default function Details() {
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
      title = 'Jwt authentication';
      text = `<p>I implemented JWT authentication to provide an added layer of security while maintaining the client session. I achieved this by generating an access token and refresh token at login. The access and refresh tokens are sent to the client in cookies. On the server-side, the refresh token is stored in redis cache for later use. Take a look at the code below to view this setup.</p></br><p>Server-side login request:</p></br><img src="/carbon.png"/></br><p>Generate token functions:</p></br><img src="/carbon1.png"/></br><p>Token authentication function</p></br><img src="/carbon2.png"/></br><p>Token refresh function</p></br><img src="/carbon3.png"/>`;
    }
    if (option === 2) {
      title = 'Email verification';
      text = `<p>I implemented email verification to authenticate the user's credentials and prevent spam attacks. Take a look at the code below to view this setup.</p</br><p style="margin-top: 10px;">During the registration process a JWT token is created and sent to the user via email. The email is transported to the client using an API called nodemailer.</p></br><img src="/carbon4.png"/></br><p>The client will be routed back to the server after opening their email and selecting the confirmation link. The confirmed field will be updated to true and the client will be redirected to the login page</p></br><img src="/carbon5.png"/>`;
    }
    if (option === 3) {
      title = 'Thirdweb API';
      text = `<p>Thirdweb is a web3 development framework that allows users the ability to easily build, manage, and anaylze web3 applications. I used Thirdweb to construct most of the web3 features in my application. </p)`;
    }
    if (option === 4) {
      title = 'Image upload, display and save';
      text = `<p>Uploading, displaying and saving images was a necessary feature for my application. In order to create an NFT or collection the user needs the ability to upload images. Adding a profile photo required the user to save their image to the database. Take a look at the code below to view how I set this up. </p></br><p>On the profile page the user can set their profile image. The profileImage variable contains two properties; preview and raw.</p><img  src="/carbon6.png"/></br><p>The handlePhotoChange function sets the profile image. The preview property takes the image file and converts it to a URL. The preview image will be displayed immediately before saving the photo to the server's upload folder.</p></br><img  src="/carbon7.png"/></br><p>Let's now take a look at the code inside submit(). The formData variable creates a new FormData object and this object contains the data that will be sent to the server. The reason for creating a FormData object is to make sure that the data sent to the server are encoded as Content-Type: multipart/form-data. Multipart/form-data makes it possible to send files to the server. The submit() function saves the image to the uploads folder on the server.</p></br><img src="carbon8.png"/>`;
    }
    if (option === 5) {
      title = 'How can I view my wallet funds and Turf coins?';
      text = `<p>You can view your Metamask wallet funds and TURF coins by selecting the wallet or profile icons on the navigation bar. If you select the profile icon your wallet funds and TURF coins will be located on the top left of the profile page. </p)`;
    }
    return Swal.fire({
      icon: 'info',
      title: title,
      html: text,
      background: '#091310',
      width: '100%',
      color: '#fff',
      confirmButtonColor: '#5e17eb',
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
          <img className="w-full rounded-md" src="/projectBanner.png" />
          <div className="w-full mt-16">
            <p className="text-sm md:text-base">
              As Web 3.0 emerges, we begin to see the potential of blockchain
              technology. The third generation of the Internet has enabled
              decentralized data interconnection. This new form of Internet
              enables people to legitimately own their data through
              transparency. Kryptoturf is a dApp designed to allow users the
              ability to participate in the world of NFTs using ETH on the
              Goerli testnet. Kryptoturf can be seen as an introductory platform
              that familiarizes users with NFTs, one of the many use cases for
              blockchain technology.
            </p>
            <p className="my-8 text-sm md:text-base">
              Here are a few features I have added to this project:
            </p>
            <div className="w-full grid gap-2 grid-cols-2">
              <button
                className="border-2 border-[#5e17eb] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#5e17eb]"
                onClick={() => messagePop(1)}
              >
                Jwt authentication
              </button>
              <button
                className="border-2 border-[#5e17eb] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#5e17eb]"
                onClick={() => messagePop(2)}
              >
                Email verification
              </button>
              <button
                className="border-2 border-[#5e17eb] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#5e17eb]"
                onClick={() => messagePop(3)}
              >
                Thirdweb API
              </button>
              <button
                className="border-2 border-[#5e17eb] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#5e17eb]"
                onClick={() => messagePop(4)}
              >
                Image upload, display and save
              </button>
              <button
                className="border-2 border-[#5e17eb] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#5e17eb]"
                onClick={() => messagePop(5)}
              >
                Server, ORM, and Docker utilization
              </button>
              <button
                className="border-2 border-[#5e17eb] w-full sm:w-3/4 md:w-1/2 text-sm md:text-base p-2 h-24 sm:h-20 mx-auto rounded-md hover:bg-[#5e17eb]"
                onClick={() => messagePop(6)}
              >
                Smart Contracts, Solidity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <>
{' '}
<video
  poster="/introBanner.png"
  src="/intro.mp4"
  autoPlay
  className="rounded-md"
  controls
  id="introVideo"
/>
</> */
}
