import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="max-padd-container pt-[99px]">
      <div className="max-padd-container bg-hero bg-center bg-cover bg-no-repeat h-[655px] w-full rounded-3xl">
        <div className="relative top-32 xs:top-52">
          <span className="medium-18">Bienvenue chez CasaCentral</span>
          <h3 className="h1 capitalize max-w-[35rem]">
            Découvrez des maisons exceptionnelles avec CasaCentral
          </h3>
          <p className="my-10 max-w-[33rem]">
            Nous proposons des maisons uniques alliant confort, design moderne
            et qualité. Avec CasaCentral, trouvez la propriété idéale, choisie
            avec soin pour vous.
          </p>
          {/* button */}
          <div className="inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl">
            <div className="text-center regular-14 leading-tight pl-5">
              <h5 className="uppercase font-bold">-10% sur</h5>
              <p className="regular-14">Tous les biens</p>
            </div>
            <Link
              to={"/listing"}
              className="btn-secondary rounded-xl flexCenter !py-5"
            >
              Voir maintenant
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
