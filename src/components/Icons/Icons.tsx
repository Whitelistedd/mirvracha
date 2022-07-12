import Image from 'next/image'
import styled from 'styled-components'
import { devices } from '../../MediaQueries'
import Icon from './Icon/Icon'
import { IconsProps } from './Icons.model'

const Icons: React.FC<IconsProps> = ({ IconsData, CenterImage }) => {
  return (
    <IconsList>
      <Center>
        <CenterImageWrap>
          <StyledImage
            layout="responsive"
            width={315}
            height={315}
            src={CenterImage}
          />
        </CenterImageWrap>

        <ImageTitle>Взрослый</ImageTitle>
      </Center>
      {IconsData.map((icon, index) => (
        <Icon
          positionNumber={icon.positionNumber}
          key={icon.text}
          index={index}
          listNumber={IconsData.length}
          text={icon.text}
          ImageSRC={icon.image}
        />
      ))}
    </IconsList>
  )
}

const ImageTitle = styled.p`
  font-size: 2em;
  bottom: 30px;
  position: absolute;
  color: #068ca6;
  font-weight: 700;
`

const StyledImage = styled(Image)`
  object-fit: cover;
  opacity: 0.4;
  border-radius: 50%;
`

const CenterImageWrap = styled.div`
  width: 315px;
  background-color: white;
  border-radius: 50%;
`

const Center = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`

const IconsList = styled.ul`
  list-style: none;
  height: 650px;
  width: 650px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${devices.lg}) {
    ${CenterImageWrap} {
      width: 230px;
    }
    height: 550px;
    width: 550px;
    font-size: 12px;
  }

  @media only screen and (max-width: ${devices.md}) {
    ${CenterImageWrap} {
      width: 200px;
    }
    height: 470px;
    width: 470px;
    font-size: 10px;
  }

  @media only screen and (max-width: ${devices.sm}) {
    ${CenterImageWrap} {
      width: 150px;
    }
    height: 400px;
    width: 400px;
    font-size: 8px;
  }
`

export default Icons
