import { AspectRatio } from "@chakra-ui/react";



 function About(){

  return (  
    <AspectRatio maxWidth="1280px" ratio={{ base: 1, md: 16 / 9 }}>
<iframe  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5165772981595!2d30.06671307377153!3d-1.94630263670116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6e7727e9977%3A0xad1f4b2fd0a9e7b8!2sADFinance!5e0!3m2!1sen!2srw!4v1761318167438!5m2!1sen!2srw"  
 style={{border:1,margin:5, borderRadius:8}} 
 allowfullscreen="" 
 loading="lazy" 
 referrerpolicy="no-referrer-when-downgrade" 
 className="iframe-fit"

 ></iframe>   
 
 </AspectRatio>
    );
}

export default About;