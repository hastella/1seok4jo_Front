import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import sangchu from '../Assets/sangchu.png'
import {ImAttachment} from 'react-icons/im'
import type {ChatBubbleProps} from '../Interface/interface'
import type {Props} from '../Interface/interface'

const ChatBubble: React.FC<ChatBubbleProps> = ({text}) => {
  return (
    <NewChat>
      <div className='date'>2022년 10월</div>
      <div className='new-text'>{text}</div>
      <img src={sangchu} alt='유저프로필' />
    </NewChat>
  )
}

const Chat: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState('')
  const [chatHistory, setChatHistory] = useState<string[]>([])
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('inputValue', inputValue)
    setChatHistory([...chatHistory, inputValue])
    setInputValue('')
    // if (file) {
    //   // file을 서버로 업로드하는 코드 작성
    // }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  // 파일 업로드
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUpload = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setFile(files[0])
    }
    console.log(files)
  }

  const isInputEmpty = inputValue.trim() === ''

  return (
    <ChatContainer>
      <ChatBox>
        {chatHistory.map((chat, index) => (
          <ChatBubble key={index} text={chat} />
        ))}
      </ChatBox>

      <ChatForm onSubmit={handleSubmit}>
        <label onClick={handleUpload} htmlFor='fileInput'>
          <ImAttachment />
        </label>
        <input type='file' id='fileInput' onChange={handleFileInputChange} style={{display: 'none'}} />

        <input type='text' value={inputValue} onChange={handleChange} />
        <button type='submit' disabled={isInputEmpty}>
          전송
        </button>
      </ChatForm>
    </ChatContainer>
  )
}
export default Chat

const ChatContainer = styled.section``
const ChatBox = styled.div`
  padding: 0 3rem;
  width: 100%;
  height: 60vh;
  overflow: scroll;
  overflow-x: hidden;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  img {
    width: 3rem;
    height: 3rem;
  }
`

const ChatForm = styled.form`
  width: 100%;
  position: relative;
  bottom: 3em;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #c0c0c0;
  padding-top: 2rem;
  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
  input {
    width: 80%;
    height: 3rem;
    border-radius: 1rem;
    text-indent: 1.2rem;
    font-size: 1.2rem;
  }
  button {
    width: 10%;
    height: 3rem;
    color: #fff;
    font-size: 1.2rem;
    background-color: #1877f2;
    border: transparent;
    border-radius: 1rem;
    cursor: pointer;
    :disabled {
      background-color: #c0c0c0;
      color: #fff;
      cursor: not-allowed;
    }
  }
`

const NewChat = styled.div`
  display: flex;
  margin-bottom: 2rem;
  margin-top: 3rem;

  .date {
    margin-left: auto;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .new-text {
    position: relative;
    width: 20rem;
    height: auto;
    padding: 1rem;
    border-radius: 10px;
    background-color: #1877f2;
    border: transparent;
    font-size: 1.2rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
    color: #fff;
  }
  img {
    border-radius: 5rem;
    margin-left: 1rem;
  }
`
