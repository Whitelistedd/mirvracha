import styled from 'styled-components'
import { DescriptionItemProps } from './DescriptionItem.model'

const DescriptionItem: React.FC<DescriptionItemProps> = ({ description }) => {
  return (
    <Container>
      <Description>{description}</Description>
    </Container>
  )
}

const Description = styled.p``

const Container = styled.li`
  padding: 1em;
  background: white;
  color: #223867;
  font-size: 1.3em;
  background: rgba(255, 255, 255, 0.7);
  border: 2px solid #068ca6;
  box-shadow: 0px 4px 4px rgba(6, 140, 166, 0.31);
  border-radius: 10px;
`

export default DescriptionItem
