import Image from 'next/image'
import styled from 'styled-components'
import DescriptionList from './DescriptionList/DescriptionList'
import { PatientCardProps } from './PatientCard.model'

const PatientCard: React.FC<PatientCardProps> = ({
  title,
  ImageSRC,
  Descriptions,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ImageContainer>
        <StyledImage
          src={ImageSRC}
          alt={title}
          width={100}
          height={100}
          layout="responsive"
          priority
        />
      </ImageContainer>
      <DescriptionList Descriptions={Descriptions} />
    </Container>
  )
}

const StyledImage = styled(Image)`
  filter: drop-shadow(0px 4px 25px rgba(6, 140, 166, 0.25));
  overflow: visible;
`

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  span {
    width: 100%;
    height: 100%;
    /* чтобы на изображении появилась тень */
    overflow: visible !important;
  }
`

const Title = styled.h3`
  font-size: 1.8em;
`

const Container = styled.li`
  flex: 1;
  display: flex;
  gap: 1.9em;
  flex-direction: column;
  align-items: center;
  color: #028ca6;
`

export default PatientCard
