import styled from 'styled-components'
import { CardData } from '../../data'
import PatientCard from '../PatientCard/PatientCard'

const PatientCards: React.FC = () => {
  return (
    <Cards>
      {CardData.map((card, index) => (
        <PatientCard
          key={index}
          title={card.title}
          ImageSRC={card.image}
          Descriptions={card.descriptions}
        />
      ))}
    </Cards>
  )
}

const Cards = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2.3em;
  flex-wrap: wrap;
`

export default PatientCards
