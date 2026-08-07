import styled, { keyframes } from 'styled-components'
import { media } from '@/app/styles/mixins'

const wheel = keyframes`
  0%   { transform: translateY(0); opacity: 0; }
  22%  { opacity: 1; }
  75%  { transform: translateY(11px); opacity: 0; }
  100% { transform: translateY(11px); opacity: 0; }
`

/* Горизонтальное центрирование дублируется в кадрах: иначе анимация
   transform затрёт translateX(-50%) у самого элемента. */
const fadeIn = keyframes`
  from { opacity: 0; transform: translate(-50%, 14px); }
  to   { opacity: 1; transform: translate(-50%, 0); }
`

export const CueRoot = styled.a`
  position: absolute;
  left: 50%;
  bottom: 30px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transform: translateX(-50%);
  animation: ${fadeIn} 900ms ease 900ms both;
  transition: opacity ${({ theme }) => theme.transition.base};

  &:hover {
    opacity: 0.7;
  }

  ${media.lg`
    display: none;
  `}
`

export const CueLabel = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textFaint};
`

export const CueMouse = styled.span`
  position: relative;
  display: block;
  width: 24px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.color.borderStrong};
  border-radius: ${({ theme }) => theme.radius.pill};

  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 3px;
    height: 7px;
    margin-left: -1.5px;
    border-radius: 2px;
    background: ${({ theme }) => theme.color.pink};
    box-shadow: 0 0 10px ${({ theme }) => theme.color.pink};
    animation: ${wheel} 2.1s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
  }
`
