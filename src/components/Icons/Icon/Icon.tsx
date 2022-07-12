import Image from 'next/image'
import styled from 'styled-components'
import { IconProps } from './Icon.model'
import { devices } from '../../../MediaQueries'

const Icon: React.FC<IconProps> = ({
  positionNumber,
  text,
  ImageSRC,
  listNumber,
}) => {
  return (
    <Container index={positionNumber} listNumber={listNumber}>
      <Wrap index={positionNumber}>
        <Badge>
          <HealthImage
            src={'/assets/images/health.svg'}
            index={positionNumber}
            height={20}
            width={20}
            layout={'responsive'}
            alt={'health Badge'}
          />
        </Badge>
        <ImageWrap>
          <StyledImage
            src={ImageSRC}
            height={20}
            width={20}
            layout={'responsive'}
            alt={text}
          />
        </ImageWrap>
        <Description index={positionNumber}>{text}</Description>
      </Wrap>
    </Container>
  )
}

const ImageWrap = styled.div`
  width: 110px;
  height: 107px;
`

const Description = styled.p<{ index: number }>`
  --left: 140px;
  --right: 130px;
  --top: 90px;
  --bottom: 80px;
  --side-bottom: -20px;
  opacity: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 135px;
  width: 187px;
  position: absolute;
  font-weight: 700;
  font-size: 1em;
  line-height: 22px;
  transition: 300ms ease;

  /* изменить положение текста в зависимости от того, в какой позиции находится элемент */
  ${({ index }) =>
    index === 2
      ? 'bottom: var(--bottom);'
      : index < 6 && index > 2
      ? 'left: var(--left); text-align: left; bottom: var(--side-bottom);'
      : index === 6
      ? 'top: var(--top);'
      : index > 6
      ? 'right: var(--right); text-align: right; width: 162px; bottom: var(--side-bottom);'
      : ''}
`

const Badge = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 50px;
  right: 50px;
  width: 95px;
  filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.25));
`

const HealthImage = styled(Image)<{ index: number }>``

const StyledImage = styled(Image)``

const Wrap = styled.div<{ index: number }>`
  display: flex;
  justify-content: space-around;
  transform: rotate(calc(360deg / -8 * ${(props) => props.index}));
  align-items: center;
  position: relative;

  &:hover {
    cursor: pointer;
    ${Description} {
      opacity: 1;
    }
  }
`

const Container = styled.li<{ index: number; listNumber: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  transform-origin: 325px;
  left: 0;
  color: #223867;

  /* разделит круг в зависимости от того, сколько значков у нас есть, и расположит его в зависимости от номера позиции */
  transform: rotate(
    calc(360deg / ${(props) => props.listNumber} * ${(props) => props.index})
  );

  @media only screen and (max-width: ${devices.lg}) {
    transform-origin: 275px;
    ${ImageWrap} {
      width: 110px;
    }
    ${Badge} {
      width: 70px;
      bottom: 60px;
      right: 50px;
    }
    ${Wrap} {
      font-size: 15px;
    }
    ${Description} {
      --left: 130px;
      --right: 120px;
      --top: 90px;
      --bottom: 75px;
    }
  }

  @media only screen and (max-width: ${devices.md}) {
    transform-origin: 235px;
    ${ImageWrap} {
      width: 90px;
    }
    ${Badge} {
      width: 60px;
    }
    ${Description} {
      --left: 100px;
      --right: 90px;
      --top: 70px;
      --bottom: 65px;
      --side-bottom: -10px;
      width: 150px;
    }
    ${Wrap} {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: ${devices.sm}) {
    transform-origin: 200px;
    ${ImageWrap} {
      width: 70px;
    }
    ${Badge} {
      width: 60px;
      right: 35px;
      bottom: 60px;
    }
    ${Description} {
      font-size: 0.7em;
      width: 115px;
      --left: 80px;
      --right: 70px;
      --top: 40px;
      --bottom: 55px;
      --side-bottom: 5px;
    }
    ${Wrap} {
      font-size: 13px;
    }
  }
`

export default Icon
