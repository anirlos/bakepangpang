declare module './LogoutButton';
declare module '*.png';
declare module '*.svg' {
	const content: any;
	export default content;
}
declare module '*.jpg' {
	const value: any;
	export = value;
}
declare global {
	interface Window {
		daum:
			| {
					postcode: {
						load: (fn: () => void) => void;
						version: string;
						_validParam_: boolean;
					};
					Postcode: PostcodeConstructor;
			  }
			| undefined;
	}
}
