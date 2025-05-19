import Image from 'next/image';
import { dataTeam } from "../../../utils/data";
import styles from '../../../styles/meet-team/index.module.scss';

const MeetTeam = () => {
  return (
    <section className={styles.meet_team}>
        <div className="container">
            <div className={styles.meet_team__inner}>
            <div className={styles.meet_team__top}>
                <h1 className="title">meet Our core team</h1>
            </div>
            <div className={styles.meet_team__bottom}>
                <div className={styles.meet_team__bottom__top}>
                <Image width={1290} height={377} className={styles.meet_team__image} src="/img/section-meet-team/section-meet-team-img.jpg" alt="" />
                </div>
                <div className={styles.meet_team__bottom__bottom}>
                <ul className={styles.meet_team__list}>
                    {dataTeam.map((item) => (
                    <li className={styles.meet_team__item} key={item.id}>
                        <Image width={298} height={298} className={styles.meet_team__item_image} src={item.image} alt={item.name} />
                        <h4 className={styles.meet_team__item_name}>{item.name}</h4>
                        <p className={styles.meet_team__item_role}>{item.role}</p>
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