import * as S from "./style";
import { IDescription } from "./type";

export const Description = ({ value }: IDescription) => {
  return (
    <S.Description>
      <p>물체에 마우스를 올리면 설명이 나옵니다</p>
      <h1>{value.title}</h1>
      <h2>{value.value}</h2>
    </S.Description>
  );
};
