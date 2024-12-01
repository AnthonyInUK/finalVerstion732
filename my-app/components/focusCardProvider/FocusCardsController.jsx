import { FocusCards } from '../ui/focus-cards';



export function FocusCardsController() {
  const cards = [
    {
      title: 'Forest Adventure',
      src: '/images/user1.jpg',
    },
    {
      title: 'Valley of life',
      src: '/images/user1.jpg',
    },
    {
      title: 'Sala behta hi jayega',
      src: '/images/user1.jpg',
    },
    {
      title: 'Camping is for pros',
      src: '/images/user1.jpg',
    },
    {
      title: 'The road not taken',
      src: '/images/user1.jpg',
    },
    {
      title: 'The First Rule',
      src: '/images/user1.jpg',
    },
  ];

  return <FocusCards cards={cards} />;
}
