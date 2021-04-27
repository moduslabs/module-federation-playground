import * as React from "react";
import styled from "styled-components";
import css from "./Offers.module.css";

const Container = styled.div`
  padding: 1.125rem 0;
  overflow: hidden;
`;

const Layout = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 0.3rem;
`;

const CardBody = styled.div`
  flex: 1;
  padding-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Button = styled.a``;

const content = [
  {
    title: "Live View",
    body: "Go digital as you explore our models.",
    cta: "Find out more",
    href: "#",
    img:
      "https://res.cloudinary.com/modus-create-inc/images/f_auto,q_auto:eco,w_auto/f_auto,q_auto:eco/w_560,h_350,c_scale/v1618937147/ECS/ECS-560x350.jpg",
  },
  {
    title: "New models add a sporty spark to the lineup",
    body:
      "Find out more about the blast of sportiness and dynamic handling of our latest electric additions.",
    cta: "Find out more",
    href: "#",
    img:
      "https://res.cloudinary.com/modus-create-inc/images/f_auto,q_auto:eco,w_auto/f_auto,q_auto:eco/w_560,h_350,c_scale/v1614800535/denise-jans-tVXEk07kVJU-unsplash/denise-jans-tVXEk07kVJU-unsplash-560x350.png",
  },
  {
    title: "myModusWorld",
    body: "Enter a world of exclusivity. For engineers like you.",
    cta: "Explore myModusWorld",
    href: "#",
    img:
      "https://res.cloudinary.com/modus-create-inc/images/f_auto,q_auto:eco,w_auto/f_auto,q_auto:eco/w_560,h_350,c_scale/v1610397567/Case-Study-Image-Atlassian-19-20-2/Case-Study-Image-Atlassian-19-20-2-1-560x350.jpg",
  },
];

const Offers = () => {
  return (
    <Container>
      <Layout className={css.gapFix}>
        {content.map((item, index) => (
          <Card key={index}>
            <Image alt={item.title} src={item.img} />
            <h4>{item.title}</h4>
            <CardBody>
              <span>{item.body}</span>
            </CardBody>
            <Button href={item.href}>{item.cta}</Button>
          </Card>
        ))}
      </Layout>
    </Container>
  );
};

export default Offers;
