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
  border: 2px solid #068ca6;
  padding: 1em;
  background: white;
  color: #223867;
  border-radius: 10px;
  font-size: 1.3em;
`

export default DescriptionItem
