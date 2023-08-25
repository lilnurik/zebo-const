import React from "react";
import "./Project.css";
// import  {projectRef}  from '../Navbar/Navbar'


import ProjectData from "./ProjectData";
import { BsArrowRight } from "react-icons/bs";
import img1 from "../../img/Rectangle 4.png";
import img2 from "../../img/Rectangle 5.png";
import img3 from "../../img/Rectangle 6.png";
import img4 from "../../img/Rectangle 7.png";
import img5 from "../../img/Rectangle 8.png";
import img6 from "../../img/Rectangle 9.png";
import img7 from "../../img/Rectangle 10.png";
// import img4 from "../../img/img4.png";
const Project = () => {
  return (
    <div className="all" id="project" >
    <div className="container con2" >
      <div className="items1 items">
        <div className="title title3">
          <span>01</span> Painting & decorating page
        </div>
        <div class="info">
          <div class="text">
            Welcome to our painting and decorating for construction website! We
            are the experts in the field and provide top-notch services to
            enhance the aesthetics and functionality of your construction
            projects.
            <br />
            <br /> At Zebo Construction LTD, we understand the importance of
            high-quality painting and decorating services in creating a
            beautifully finished space. Whether it's a residential, commercial,
            or industrial project, our team of skilled professionals is
            dedicated to delivering exceptional results that exceed your
            expectations.
          </div>
          <img className="imginfo" src={img1} alt="" />
        </div>
      </div>

      <div className="items2 items items2">
        <div className="title title2">
          <span>02</span> Bathroom fitting page
        </div>
        <div class="info reverse">
          <img className="imginfo imginfo2" src={img2} alt="" />

          <div class="text">
            Our bathroom fitting services include:
            <br />
            <br /> 1. Plumbing and Electrical Work: Our highly trained plumbers
            and electricians ensure that all bathroom fixtures, such as faucets,
            showerheads, toilets, and lighting, are installed correctly, meeting
            the highest safety standards.
            <br />
            <br /> 2. Tiling and Flooring: Our skilled tile installers provide
            professional tiling services for walls and floors, using a wide
            range of materials and styles to achieve the desired look for your
            bathroom.
            <br />
            <br /> 3. Bathroom Fixtures and Accessories: We offer a
            comprehensive selection of high-quality bathroom fixtures and
            accessories, including sinks, bathtubs, shower enclosures, vanities,
            mirrors, and towel racks, sourced from leading manufacturers.
            <br />
          </div>
        </div>
        <div className="second-text">
          <br /> 4. Waterproofing and Sealing: We prioritize the longevity and
          durability of your bathroom fittings by employing effective
          waterproofing and sealing techniques, preventing any water damage to
          walls and flooring.
          <br />
          <br /> 5. Finishing Touches: We pay attention to the smallest details,
          such as grouting, caulking, and painting, ensuring a flawless finish
          that adds elegance and sophistication to your bathroom space.
          <br />
        </div>
      </div>

      <div className="items3 items items2">
        <div className="title title2">
          <span>03</span> House extention page
        </div>
        <div class="info info8">
          <div class="text">
            Are you looking to enhance your living space without having to move
            to a new house? Our professional construction team is here to help
            you achieve your dream home with a seamless house extension project.
            <br />
            Whether you need an additional bedroom, a bigger living room, a home
            office, or any other room, our experts have the and knowledge skills
            provide to you with a high-quality extension that will perfectly
            blend with your existing home.
            <br /> We understand that client every has unique requirements, and
            our team is dedicated to working closely with you to ensure your
            vision is brought to life. From the initial design phase to the
            final construction, we will guide you through the entire process,
            providing expert advice and ensuring clear communication every step
            of the way.
            <br />
            <br /> We prioritize the convenience and comfort of our clients,
            which is why we strive to complete each project on time and within
            budget. Our construction team is highly experienced, efficient, and
            committed to delivering exceptional craftsmanship and attention to
            detail.
          </div>
          <img className="imginfo  imginfo2" src={img3} alt="" />
        </div>
      </div>

      <div className="items4 items">
        <div className="title title3">
          <span>04</span> Maintenance services page
        </div>
        <div class="info reverse info3">
          <img className="imginfo imginfo2" src={img4} alt="" />

          <div class="text">
            Elevate the longevity and performance of your buildings with our
            specialized maintenance services. Our experienced team is committed
            to upholding the safety, functionality, and aesthetics of your
            structures.
            <br />
            <br /> From regular check-ups and immediate repairs to strategic
            maintenance planning, we ensure your buildings remain secure,
            efficient, and visually appealing. Whether it's addressing HVAC
            systems, roofing, security infrastructure, or any other facet of
            your property, our tailored solutions guarantee enduring quality.
            <br />
            Rely on us to safeguard your investments and preserve the value of
            your buildings over the long term.
            <br />
          </div>
        </div>
      </div>

      <div className="items5  items">
        <div className="title title3">
          <span>05</span> Carpenter jobs page
        </div>
        <div class="info">
          <div class="text">
            Our carpenters are the backbone of our construction operations,
            specializing in the creation and installation of various wooden
            components. From walls and floors to doors and cabinets, they excel
            in transforming raw materials into functional and aesthetically
            pleasing structures. With an eye for detail and a passion for their
            craft, our carpenters ensure that every piece is meticulously
            measured, cut, shaped, and joined to perfection.
            <br />
            <br /> When it comes to carpentry for your building project, our
            team of dedicated carpenters is here to deliver exceptional results.
            With their passion, skill, and commitment to craftsmanship, they
            create wooden structures that stand the test of time and enhance the
            overall beauty and functionality of your project.
            <br />
          </div>
          <img className="imginfo" src={img5} alt="" />
        </div>
      </div>

      <div className="items6  items items2">
        <div className="title title2">
          <span>06</span> Kitchen tiling page
        </div>
        <div class="info reverse">
          <img className="imginfo imginfo2" src={img6} alt="" />

          <div class="text">
            Kitchen fitting services include:
            <br />
            <br /> 1. Design and planning: Our team works closely with you to
            your understand requirements and design a kitchen layout that
            maximizes space and functionality. We take into consideration your
            preferences for appliances, cabinetry, countertops, and lighting to
            create a customized design that suits your lifestyle.
            <br />
            <br />
            2. Removal and disposal: Before the installation process begins, we
            carefully dismantle and remove any existing kitchen components,
            disposing of them responsibly. We prioritize cleanliness and aim to
            minimize disruption to your daily routine. <br />
            <br />
            3.Plumbing and electrical work: Our fitters are experienced in
            handling all plumbing and <br />
            electrical for requirements your kitchen. This includes installing
            sinks, faucets, dishwashers, ovens, and lighting fixtures, ensuring
            that all connections are secure and compliant with safety
            regulations. <br />
          </div>
        </div>
        <br />
        <div className="second-text">
          4. Cabinetry and countertops: We offer a wide range of high-quality
          cabinetry and countertop materials to suit a variety of styles and
          budgets. Our team will expertly install these elements, providing a
          seamless finish that enhances the overall aesthetics of your kitchen.{" "}
          <br />
          <br />
          5. Flooring and tiling: We can also recommend and install suitable
          flooring and tiling options for your kitchen. Our skilled craftsmen
          pay attention to detail, ensuring precise fitting and a visually
          striking result.
          <br />
          <br /> 6. Finishing touches: To complete your dream kitchen, we can
          also assist with the installation of fixtures, such as handles, knobs,
          and backsplashes. Our team ensures that every detail is meticulously
          attended to, leaving you with a kitchen space that truly reflects your
          personal style.
        </div>
      </div>

      <div className="items7 items">
        <div className="title title3">
          <span>07</span> Paving jobs page
        </div>
        <div class="info">
          <div class="text">
            Our paving professionals specialize in the installation, repair, and
            maintenance of various paving materials such as concrete, asphalt,
            brick, and stone. They possess extensive knowledge of paving
            techniques and industry best practices, ensuring that every project
            is executed with precision and attention to detail.
            <br />
            <br /> Whether it's a small residential driveway or a large
            commercial parking lot, our pavers approach each job with the same
            level of professionalism and craftsmanship. They meticulously
            prepare the site, ensuring proper grading and compaction to create a
            solid and durable foundation for the paving materials. With their
            expertise, they guarantee that the final result is not only visually
            appealing but also functional and long-lasting.
          </div>
          <img className="imginfo" src={img7} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Project;
