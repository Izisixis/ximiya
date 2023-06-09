import React, {useState} from 'react'
import { Button } from '../../components/Button'
import styles from './SecondPage.module.scss'
import { Modal } from '../../components/Modal'

const img = [
  '2.jpg',
  '3.jpg',
  
]

export const SecondPage = () => {

  const [secondpage, setSecondpage] = useState(false);
    const handler= () => {
      setSecondpage(prev => !prev)
    }

  return (
    <div className={styles.root}>
    
    <Modal images={img} isActive={secondpage} clickHandler={handler}/> 

      <h1>Фантастические сплавы, и где они обитают</h1>
      
      <h3>Новые литейные сплавы</h3>

      <p>
        Оригинальные материалы РУСАЛа для изготовления отливок различными методами. Позволяют Потребителям снизить стоимость конечных изделий за счет снижения материалоёмкости либо за счет использования укороченного производственного цикла благодаря технологичности.
        РУСАЛ создал новое поколение высокопрочных литейных сплавов типа Никалин для автомобильной отрасли. За счет применения специальных эвтектикообразующих добавок материалы обладают жидкотекучестью характерной для традиционных сплавов алюминий-кремний, что позволяет применять их для литья деталей сложной формы различными способами, включая технологии литья под давлением. Уникальная композиция сплавов позволяет получать уровень прочности и усталости превышающий существующие сплавы типа А356 на 30-40%.
        Другой группой инновационных материалов являются высокотехнологичные сплавы для литья под давлением. Использование новых подходов по дизайну сплавов позволило создать линейку сплавов, которые могут быть применены сразу после литья без дополнительной термической обработки. Высокая технологичность и укороченный производственный цикл позволяет снизить стоимость готовой детали до 30% за счет исключения брака при литье и последующих поводок при термической обработке. Высокие пластические характеристики сплавов применять их для элементов, испытывающих значительные деформации в процессе эксплуатации и монтажных работ.
        Все материалы были успешно опробованы для литья различных деталей в научных центрах и производственных компаниях России, Европы и Азии.
      </p>    

      <h3>Деформируемые алюминиевые сплавы</h3>
      
      <p>
        Новое поколение материалов для различных отраслей промышленности и народного хозяйства. Данная продукция разработана в качестве замены традиционным алюминиевым сплавам и сталям за счет улучшенного комплекса свойств.
        MaxiFlow – собственный бренд РУСАЛ для сплавов 6ХХХ, отличающихся улучшенной технологичностью при прессовании различных изделий, включая панели со сложной геометрией. По своей прочности полностью соответствуют международным спецификациям на соответствующие марки, но при этом демонстрируют повышенную скорость истечения металла при прессовании без дефектов поверхности. Позволяют снизить нагрузки на пресс, а также повысить производительность при сохранении высокого качества продукции, характерного для сплавов 6ХХХ.
        Р-1407 – свариваемый материал с повышенной коррозионной стойкостью разработанный для перевозки химически опасных грузов, включая крепкую азотную кислоту. Обладает коррозионной стойкостью на уровне чистого алюминия при повышенных в 2 раза характеристиках усталости и выносливости. Расчеты показывают, что применение Р-1407 взамен сплава АД0 позволяет снизить толщину стенки котла вагона-цистерны на 50% и тем самым увеличить грузоподъемность на 4 тн, а при замене стали в вагонах-цистернах для перевозки нефти, бензина и авиационного топлива обеспечивает снижение массы котла на 30%.
      </p>

        <Button onClick={handler} name='Картинки'/>

    </div>
  )
}
