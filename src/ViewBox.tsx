import { styled } from "@stitches/react";

interface ViewBoxProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  linkUrl: string;
}

const Container = styled("a", {
  height: "300px",
  marginBottom: "20px",
})

const ViewBoxTitle = styled('div', {
  margin: 0,
  marginTop: -150,
  marginLeft: 30,
})

function ViewBox({title, subtitle, imageUrl, linkUrl}: ViewBoxProps) {
  return (
    <Container href={linkUrl}>
      <img src={imageUrl} alt={title} style={styles.image}/>
      <ViewBoxTitle>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </ViewBoxTitle>
    </Container>

  );
}

const styles = {
  image: {
    borderRadius: '32px',
    overflow: 'hidden',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}

export default ViewBox;