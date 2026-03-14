import { DEFAULT_CONFIG } from '~demo/constants/DemoConfig';
import { PRESETS } from '~demo/constants/Presets';
import type { TDemoConfig } from '~demo/types/DemoConfig';
import type { IProperties } from '~demo/types/Properties';

const Properties: React.FC<IProperties> = ({
	name,
	initial,
	thinking,
	avatarType,
	avatarValue,
	avatarImageUrl,
	size,
	top,
	right,
	bottom,
	left,
	responseDelay,
	setName,
	setInitial,
	setThinking,
	setAvatarType,
	setAvatarValue,
	setAvatarImageUrl,
	setSize,
	setTop,
	setRight,
	setBottom,
	setLeft,
	setResponseDelay,
}) => {
	const applyConfig = (config: TDemoConfig) => {
		setName(config.name);
		setInitial(config.initial);
		setThinking(config.thinking);
		setAvatarType(config.avatarType);
		setAvatarValue(config.avatarValue);
		setAvatarImageUrl(config.avatarImageUrl);
		setSize(config.size);
		setTop(config.top);
		setRight(config.right);
		setBottom(config.bottom);
		setLeft(config.left);
		setResponseDelay(config.responseDelay);
	};

	return (
		<section className="app__card app__controls">
			<h2>Live Props</h2>
			<div className="app__props-layout">
				<div className="app__props-column">
					<section className="app__group">
						<h3>Identity</h3>
						<div className="app__group-grid">
							<label>
								Name
								<input
									value={name}
									onChange={(event) =>
										setName(event.target.value)
									}
								/>
							</label>

							<label>
								Initial message
								<input
									value={initial}
									onChange={(event) =>
										setInitial(event.target.value)
									}
									placeholder="empty = default greeting"
								/>
							</label>
						</div>
					</section>

					<section className="app__group">
						<h3>Behavior</h3>
						<div className="app__group-grid">
							<label>
								Thinking message
								<input
									value={thinking}
									onChange={(event) =>
										setThinking(event.target.value)
									}
									placeholder="empty = default thinking text"
								/>
							</label>

							<label>
								Mock response delay (ms)
								<input
									type="number"
									min={0}
									step={100}
									value={responseDelay}
									onChange={(event) =>
										setResponseDelay(
											Number(event.target.value) || 0,
										)
									}
								/>
							</label>
						</div>
					</section>
				</div>

				<div className="app__props-column">
					<section className="app__group">
						<h3>Avatar</h3>
						<div className="app__group-grid">
							<label>
								Avatar content type
								<select
									value={avatarType}
									onChange={(event) =>
										setAvatarType(
											event.target
												.value as TDemoConfig['avatarType'],
										)
									}
								>
									<option value="initials">
										Initials (no children)
									</option>
									<option value="emoji">Emoji span</option>
									<option value="text">Text span</option>
									<option value="badge">Div badge</option>
									<option value="image">Image</option>
								</select>
							</label>

							{avatarType !== 'image' &&
								avatarType !== 'initials' && (
									<label>
										Avatar content value
										<input
											value={avatarValue}
											onChange={(event) =>
												setAvatarValue(
													event.target.value,
												)
											}
											placeholder={
												avatarType === 'emoji'
													? '💬'
													: 'AI'
											}
										/>
									</label>
								)}

							{avatarType === 'image' && (
								<label>
									Avatar image URL
									<input
										value={avatarImageUrl}
										onChange={(event) =>
											setAvatarImageUrl(
												event.target.value,
											)
										}
										placeholder="https://..."
									/>
								</label>
							)}
						</div>
					</section>

					<section className="app__group">
						<h3>Placement</h3>
						<div className="app__actions">
							{PRESETS.map((preset) => (
								<button
									key={preset.label}
									type="button"
									onClick={() => applyConfig(preset.config)}
								>
									{preset.label}
								</button>
							))}
							<button
								type="button"
								onClick={() => applyConfig(DEFAULT_CONFIG)}
							>
								Reset
							</button>
						</div>

						<div className="app__group-grid">
							<label>
								Size (px)
								<input
									type="number"
									min={32}
									max={120}
									value={size}
									onChange={(event) =>
										setSize(
											Number(event.target.value) || 60,
										)
									}
								/>
							</label>
						</div>

						<div className="app__position-grid">
							<label>
								Top (px)
								<input
									type="number"
									value={top}
									onChange={(event) =>
										setTop(event.target.value)
									}
									placeholder="empty = auto"
								/>
							</label>

							<label>
								Right (px)
								<input
									type="number"
									value={right}
									onChange={(event) =>
										setRight(event.target.value)
									}
									placeholder="empty = auto"
								/>
							</label>

							<label>
								Bottom (px)
								<input
									type="number"
									value={bottom}
									onChange={(event) =>
										setBottom(event.target.value)
									}
									placeholder="empty = auto"
								/>
							</label>

							<label>
								Left (px)
								<input
									type="number"
									value={left}
									onChange={(event) =>
										setLeft(event.target.value)
									}
									placeholder="empty = auto"
								/>
							</label>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Properties;
