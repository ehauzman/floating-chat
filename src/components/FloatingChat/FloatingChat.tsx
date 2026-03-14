import React from 'react';

import ChatAvatar from '@/components/ChatAvatar/ChatAvatar';
import ChatMessages from '@/components/ChatMessages/ChatMessages';
import { useFloatingChat } from '@/hooks/useFloatingChat';
import type { IFloatingChat } from '@/types/IFloatingChat';
import { getInitials } from '@/utils/getInitials';

const FloatingChat: React.FC<IFloatingChat> = ({
	children,
	name,
	initial,
	thinking,
	top,
	left,
	right = 20,
	bottom = 20,
	size = 60,
	onSend,
}) => {
	const { isOpen, handleOpenChat, handleCloseChat } = useFloatingChat();
	const initials = getInitials(name);

	return (
		<>
			<ChatAvatar
				size={size}
				bottom={bottom}
				left={left}
				right={right}
				top={top}
				handleOpenChat={handleOpenChat}
			>
				{children ?? initials}
			</ChatAvatar>

			{isOpen && (
				<ChatMessages
					name={name}
					bottom={bottom}
					top={top}
					left={left}
					right={right}
					size={size}
					initial={initial}
					thinking={thinking}
					onSend={onSend}
					onClose={handleCloseChat}
				>
					{children ?? initials}
				</ChatMessages>
			)}
		</>
	);
};

export default FloatingChat;
