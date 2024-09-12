
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footers() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className='ml-8 mt-8'>
      <img src="https://static.wixstatic.com/media/3ee819_63dadcea7b0c47b79caecfe7d7d1c8c7~mv2.png/v1/crop/x_208,y_181,w_724,h_386/fill/w_280,h_149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3ee819_63dadcea7b0c47b79caecfe7d7d1c8c7~mv2.png" alt="" style={{width:"224px",height:"119px",objectFit:"cover", width:"224px", height:"119px" ,srcset:"https://static.wixstatic.com/media/3ee819_63dadcea7b0c47b79caecfe7d7d1c8c7~mv2.png/v1/crop/x_208,y_181,w_724,h_386/fill/w_280,h_149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3ee819_63dadcea7b0c47b79caecfe7d7d1c8c7~mv2.png", fetchpriority:"high"}}></img>
     
    </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 pr-10">
            <div>
              <Footer.Title title="Home" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About us</Footer.Link>
                <Footer.Link href="#">Service</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Why us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Careears</Footer.Link>
                <Footer.Link href="#">info@goignis.com</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between ml-8">
          <Footer.Copyright href="#" by="Goignis™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
