import styled from "styled-components";
import { Button } from "react-bootstrap";

export const ShoppingCarButton = styled(Button)`
  width: 3rem;
  height: 3rem;
  position: relative;
  border-radius: 50%;
`;

export const NotificationBadge = styled.div`
  border-radius: 50%;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity));
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(25%, 25%);
`;