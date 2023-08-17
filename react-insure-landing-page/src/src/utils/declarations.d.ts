declare module "*.svg" {
  const content: React.SVGProps<SVGSVGElement> & string;
  export default content;
}
