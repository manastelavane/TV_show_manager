import styled from 'styled-components';
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00072e;
  box-shadow: 0 3px 6px 0 rgb(0, 0, 0);
  width: 100%;
  z-index: 20;
`;
export const Logo = styled.div`
  margin-left: 30px;
  font-size: 25px;
  font-weight: bolder;
`;
export const SearchInput = styled.input`
  padding-left: 20px;
  margin: 15px;
  height: 35px;
  width: 450px;
  border-radius: 30px;
  border: solid 1px black;
  outline: none;
  margin-right: 30px;
`;
export const HomeContainer = styled.div`
  padding: 20px;
  min-height: calc(100vh - 65px);
  width: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23000000' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23000000'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  background-color: #7bfff6;
`;
export const ShowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Btn = styled.button`
  z-index: 10;
  font-size: 50px;
  content: "+";
  //   height: 100px;
  padding: 0px 15px 0 15px;
  background-color: black;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 50px;
  z-index: 99;
  margin: 0;
  @media screen and (max-width: 600px) {
    font-size: 49px;
    padding: 0px 13px 0 13px;
    right: 20px;
  }
`;
