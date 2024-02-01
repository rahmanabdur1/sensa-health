import style from './Checkout.module.css'
import img1 from '../../assets/images/checkout/level_graph_down.jpg'
import img2 from '../../assets/images/checkout/bean_can_do_it_en.jpg'
import img3 from '../../assets/images/checkout/now_vs_after_graph.jpg'
import img4 from '../../assets/images/checkout/bean_holding_heart.jpg'
import img5 from '../../assets/images/checkout/MedicalTeam.jpg'
import img6 from '../../assets/images/checkout/bean_champion (1).jpg'
import info1 from '../../assets/images/checkout/lessons.jpg'
import info2 from '../../assets/images/checkout/activities.jpg'
import info3 from '../../assets/images/checkout/guidance.jpg'
import info4 from '../../assets/images/checkout/personalized_content.jpg'
import info5 from '../../assets/images/checkout/habits_plan.jpg'
import info6 from '../../assets/images/checkout/exercises.jpg'


const beforeData = [
    "Letting things slip your mind",
    "Procrastination",
    "Anxiety and stress",
    "Difficulty controlling emotions",
    "Lack of self-control",
    "Low self-esteem"
];

const afterData = [
    "Clarity and understanding",
    "Drive and energy",
    "A relaxed state of mind",
    "The ability to change how you think",
    "Complete self-control",
    "Learning to love yourself"
];

const infoData = [
    {
        imageSrc: info1,
        altText: '28+ self-paced lessons',
        description: 'developed by professional behavioral therapists.      ',
    },
    {
        imageSrc: info2,
        altText: 'Simple 10 to 30 minute activities',
        description: 'for you to complete each day. Small steps lead to big results.',
    },
    {
        imageSrc: info3,
        altText: 'Daily guidance',
        description: 'helping you to maintain your routine and make your procrastination-free journey easy.',
    },

    {
        imageSrc: info4,
        altText: 'Concise content',
        description: 'that will help you both understand and manage your procrastination triggers.        ',
    },
    {
        imageSrc: info5,
        altText: 'A customizable habit planner',
        description: 'allows you to track your progress, eliminate bad habits, and create new, healthy ones.',
    },
    {
        imageSrc: info6,
        altText: 'Quick-relief exercises',
        description: 'to help you relax during stressful situations.',
    },

];


export function Checkout() {
    return (
        <div className={style.container}>
            {/* img */}

            <div>
                <div>
                    <div>
                        <h2>Your fresh start begins today</h2>
                        <p>Using the answers you provided we calculated your procrastination levels – check out the results.</p>
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={img2} />
                    </div>
                    <div>
                        <img src={img3} />
                    </div>
                </div>
            </div>

            {/* personal summary */}
            <div>
                <h2>Your personal summary</h2>
                <p>Your answers tell us that you could be suffering from:</p>
                <div>

                </div>

                {/* percent */}

                <div>
                    <div>
                        <div>
                            <img src={img4}>
                            </img>
                        </div>

                        <div>
                            <div>
                                <p>of users were able to stop procrastinating after just 6 weeks</p>
                            </div>
                            <div>
                                <p>of users started with similar levels of stress and anxiety as you</p>
                            </div>
                            <div>
                                <p>
                                    of users suffer from the same procrastination triggers as you</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
promise */}
                <div>
                    <div>
                        <div>
                            <h2>Our promise</h2>
                            <p>Feeling like you are constantly grappling with a restless mind and unable to concentrate can be emotionally draining, regardless of the circumstances.</p>
                            <p>But here's the good news: you are not alone on this journey.</p>
                            <p>Sensa is here to partner with you every step of the way, offering you the tools and support you need to regain your sense of control and peace of mind.</p>
                            <p>
                                With Sensa by your side, you have the power to champion your mental well-being – are you ready to embark on this transformative journey?</p>
                            <span>Monisha and Dainius @ Sensa</span>
                        </div>
                        <div>
                            <img src={img5} />
                            <p>Monisha Vasa MD and Dainius Jakučionis MD</p>
                            <span>Sensa consultants</span>
                        </div>
                    </div>
                </div>

                <div className={style.usingSensa_section}>
                    <div className={style.content}>
                        <h2>
                            If you feel like you have the weight of the world on your shoulders the <span>Sensa anti-procrastination</span> plan is perfect for you
                        </h2>
                    </div>
                    <div>
                        <div className={style.using_Sensa}>
                            <img src={img6} alt='/' />
                        </div>
                        <div className={`${style.using_Sensa} ${style.before}`}>
                            <h2>Life before you start using Sensa</h2>
                            {beforeData.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                        <div className={`${style.using_Sensa} ${style.after}`}>
                            <h2>Life after you start using Sensa</h2>

                            {afterData.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    </div>
                </div>


                <div>
                    <div>
                        {infoData.map((item, index) => (
                            <div key={index}>
                                <img src={item.imageSrc} alt={item.altText} />
                                <div>
                                    <span>{item.altText}</span>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;