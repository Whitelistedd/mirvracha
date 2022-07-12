import styled from 'styled-components'
import DescriptionItem from '../DescriptionItem/DescriptionItem'
import { DescriptionListProps } from './DescriptionList.model'

const DescriptionList: React.FC<DescriptionListProps> = ({ Descriptions }) => {
  return (
    <Container>
      {Descriptions.map((description) => (
        <DescriptionItem key={description} description={description} />
      ))}
    </Container>
  )
}

const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6em;
`

export default DescriptionList
