import Image from 'next/image';
import { dataTeam } from "../../../utils/data";

const MeetTeam = () => {
  return (
    <section className="meet-team">
        <div className="container">
            <div className="meet-team__inner">
            <div className="meet-team__top">
                <h1 className="title">meet Our core team</h1>
            </div>
            <div className="meet-team__bottom">
                <div className="meet-team__bottom--top">
                <Image width={1290} height={377} className="meet-team__image" src="/img/section-meet-team/section-meet-team-img.jpg" alt="" />
                </div>
                <div className="meet-team__bottom--bottom">
                <ul className="meet-team__list">
                    {dataTeam.map((item) => (
                    <li className="meet-team__item" key={item.id}>
                        <Image width={298} height={298} className="meet-team__item-image" src={item.image} alt={item.name} />
                        <h4 className="meet-team__item-name">{item.name}</h4>
                        <p className="meet-team__item-role">{item.role}</p>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default MeetTeam