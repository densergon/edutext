import { useAuthStore } from '../../store/authStore'

const VerAlumnos = () => {
    const { setLog, setRole } = useAuthStore();
    return (
        <div className='w-100'>
            <aside className="search-wrap">
                <div className="search">
                    <label htmlFor="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" /></svg>
                        <input type="text" id="search" />
                    </label>
                </div>

                <div className="user-actions">
                    <button onClick={() => {
                        setRole("");
                        setLog(false);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z" /><path d="M11 2h2v10h-2z" /></svg>
                    </button>
                </div>
            </aside>
            <main className="content-wrap">
                <header className="content-head">
                    <h1>Alumnos Inscritos en mis grupos</h1>
                </header>

                <div className="content">

                    <section className="person-boxes">
                        <div className="person-box">
                            <div className="box-bio">
                                <h2 className="bio-name">Frederic Levy</h2>
                                <p className="bio-position">Email:sqwsqw@sqsqwsq.de</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default VerAlumnos