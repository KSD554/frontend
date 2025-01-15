import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="max-padd-container pt-[99px]">
      <div className="max-padd-container bg-hero bg-center bg-cover bg-no-repeat h-[655px] w-full rounded-3xl">
        <div className="relative top-32 xs:top-52">
          <span className="medium-18">Bienvenue chez CasaCentral</span>
          <h1 className="h1 capitalize max-w-[40rem]">
            Découvrez des maisons exceptionnelles avec CasaCentral
          </h1>{" "}
          <p className="my-10 max-w-[33rem]">
            Nous vous offrons une sélection de maisons uniques, alliant confort,
            design moderne et qualité supérieure. Trouvez la maison de vos rêves
            avec CasaCentral, où chaque propriété est choisie avec soin pour
            répondre à vos besoins et attentes.
          </p>
          {/* button */}
          <div className="inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl">
            <div className="text-center regular-14 leading-tight pl-5">
              <h5 className="uppercase font-bold">10% de réduction</h5>
              <p className="regular-14">Sur tous les biens</p>
            </div>
            <Link to={"/listing"} className="btn-secondary rounded-xl flexCenter !py-5">Achetez maintenant</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
