import React from 'react';
import { Button, Card, Modal } from 'antd';


type AntButtonProps = {
  text: string;
  type?: 'default' | 'primary' | 'ghost';
  onClick?: () => void;
};

export const AntButton: React.FC<AntButtonProps> = ({ text, type = 'default', onClick }) => (
  <Button type={"primary"} onClick={onClick}>
    {text}
  </Button>
);


type AntCardProps = {
  title: string;
  content: string;
};

export const AntCard: React.FC<AntCardProps> = ({ title, content }) => (
  <Card title={title}>
    <p>{content}</p>
  </Card>
);


type AntModalProps = {
  title: string;
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export const AntModal: React.FC<AntModalProps> = ({ title, visible, onClose, children }) => (
  <Modal title={title} open={visible} onCancel={onClose} footer={null}>
    {children}
  </Modal>
);