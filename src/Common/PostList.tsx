import React, {useState} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {BsFillSuitHeartFill, BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs'
import PostModal from '../Modal/PostModal'

const PostList = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/PostDetail`)
  }

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
  }

  // 모달 핸들링
  const handleOpenModal = () => {
    setModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <PostListStyled>
      {feedLists.map((data, index) => (
        <FeedStyled key={index} onClick={handleClick}>
          {/* <PostModal isOpen={modalOpen} onClose={handleCloseModal}>
            <div>test</div>
          </PostModal> */}
          <img src={data.image} alt={data.name} />
          {/* <button type='button'>
            {isLiked ? <BsSuitHeartFill onClick={handleLikeClick} /> : <BsSuitHeart onClick={handleLikeClick} />}
          </button> */}
          <div className='text'>
            <FeedInfoStyled>
              <div className='title'>{data.title}</div>
              <div className='location'>{data.location}</div>
              <div className='date'>{data.date}</div>
            </FeedInfoStyled>

            <FeedLikeStyled>
              <LikeButtonStyled>
                <BsFillSuitHeartFill />
              </LikeButtonStyled>

              <div>{data.likes}</div>
            </FeedLikeStyled>
          </div>
        </FeedStyled>
      ))}
    </PostListStyled>
  )
}

const feedLists = [
  {
    image: 'https://a0.muscache.com/im/pictures/e552e146-a738-4bc3-9b79-d6757b447acc.jpg?im_w=1200',
    name: '사진',
    title: '한국관광공사',
    location: '강릉',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/b4055c00-cc91-49ee-9f72-e7eb763a0d72.jpg?im_w=720',
    name: '사진',
    title: '렛츠코레일',
    location: '설악산',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/e86d3101-7e36-43f7-a346-ef7610c60470.jpg?im_w=720',
    name: '사진',
    title: '가족여행카페',
    location: '제주도',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/e2d61a36-c60e-4d9c-927c-22c001c84771.jpg?im_w=1200',
    name: '사진',
    title: '한국관광공사',
    location: '제주도',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },

  {
    image: 'https://a0.muscache.com/im/pictures/98e1a732-8f1f-49a9-a3f3-bd3e165562d1.jpg?im_w=720',
    name: '사진',
    title: '렛츠코레일',
    location: '강릉',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/cd2a9f64-6425-4ed3-bcf1-15c667b70cc4.jpg?im_w=720',
    name: '사진',
    title: '렛츠코레일',
    location: '강릉',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/bd1f23d7-b125-46a4-847f-0e69969d72b8.jpg?im_w=960',
    name: '사진',
    title: '렛츠코레일',
    location: '경주',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-6188946/original/3ff71f01-ced5-4d02-858c-b3bcb05c2f60.jpeg?im_w=720',
    name: '사진',
    title: '렛츠코레일',
    location: '부산',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-6188946/original/ee61e74f-deb0-4f41-b015-9c4781eed019.jpeg?im_w=720',
    name: '사진',
    title: '한국관광공사',
    location: '강릉',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-6188946/original/129e4857-cefa-485b-811a-ff992c2f4c17.jpeg?im_w=1200',
    name: '사진',
    title: '렛츠코레일',
    location: '설악산',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image: 'https://a0.muscache.com/im/pictures/2d791afb-94f6-40b4-aa9e-c6cb59abb388.jpg?im_w=720',
    name: '사진',
    title: '가족여행카페',
    location: '제주도',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-6188946/original/6348ee27-8dc1-4bfb-aaa2-c8cfa791ff2d.jpeg?im_w=1200',
    name: '사진',
    title: '한국관광공사',
    location: '제주도',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },

  {
    image: 'https://a0.muscache.com/im/pictures/d32de3d8-358d-462e-b2c9-133eaf615c16.jpg?im_w=720',
    name: '사진',
    title: '렛츠코레일',
    location: '강릉',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-46650898/original/536850c9-c499-4ddb-8385-7c914a38f736.jpeg?im_w=960',
    name: '사진',
    title: '렛츠코레일',
    location: '강릉',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-46650898/original/67ec5e71-d89f-490f-a142-096dbccf7c7c.jpeg?im_w=720',
    name: '사진',
    title: '렛츠코레일',
    location: '경주',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
  {
    image:
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-46650898/original/608c2c6c-dd4e-40bf-a167-2ce7c67205f0.jpeg?im_w=720',
    name: '사진',
    title: '렛츠코레일',
    location: '부산',
    date: '2023.01.05 - 2023.01.09',
    likes: '5',
  },
]

export default PostList

const PostListStyled = styled.ul`
  margin-top: 3rem;
  display: flex;
  flex-flow: row wrap;
  padding: 0px 5rem;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
`

const FeedStyled = styled.li`
  list-style: none;
  cursor: pointer;
  // &:hover {
  //   transform: scale(1.1);
  // }
  // 호버액션 넣을까말까
  img {
    width: 18.75rem;
    height: 18.75rem;
    object-fit: cover;
    border-radius: 1.25rem;
  }
  .text {
    display: flex;
    justify-content: space-between;
    margin: 0.625rem 0 1.25rem 0;
  }
`
const FeedInfoStyled = styled.label`
  div {
    margin: 0.5rem;
  }
  span {
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-size: 19.2px;
  }
  .date {
    font-size: 0.9rem;
    color: gray;
  }
`
const FeedLikeStyled = styled.div`
  font-weight: semi-bold;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
`
const LikeButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  width: 1.875rem;
  height: 1.875rem;
  cursor: pointer;
  color: red;
  margin-right: 0.625rem;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
