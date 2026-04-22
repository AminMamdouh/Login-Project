import React, { useState } from 'react';
import {
    HeartPulse,
    Stethoscope,
    User as UserIcon,
    Mail,
    Lock,
    UserPlus,
    ShieldCheck,
    CreditCard,
    Calendar,
    Activity,
    ArrowRight,
    CheckCircle2,
    Globe
} from 'lucide-react';

const translations = {
    en: {
        title: "Intelligent healthcare,",
        subtitle: "simplified for you.",
        desc: "Experience a seamless, secure, and unified electronic health record system designed to connect medical professionals and patients effortlessly.",
        features: [
            "End-to-end encrypted medical history",
            "Instant appointment scheduling",
            "Real-time lab result tracking"
        ],
        footer: "© 2026 MediConnect Systems Inc. All rights reserved.",
        doctor: "Doctor",
        patient: "Patient",
        welcomeBack: "Welcome back",
        createAccount: "Create a ",
        createAccountSuffix: " account",
        loginDesc: "Enter your credentials to access your ",
        loginDescSuffix: " portal.",
        regDesc: "Fill in the information below to start your journey.",
        signIn: "Sign In",
        newAccount: "New Account",
        dontHave: "Don't have an account? ",
        alreadyHave: "Already have an account? ",
        signUpNow: "Sign up now",
        loginInstead: "Log in instead",
        langSwitchStr: "العربية",
        // LoginForm
        emailUser: "Email Address or Username",
        phEmail: "Enter your email",
        password: "Password",
        phPass: "••••••••",
        rememberMe: "Remember me",
        forgotPwd: "Forgot Password?",
        signInSecurely: "Sign in securely",
        loginSuccess: "Sign in submitted successfully!",
        // Doctor Form
        docName: "Full Name",
        phDocName: "Dr. John Doe",
        emailAddr: "Email Address",
        phDocEmail: "doctor@clinic.com",
        license: "License Number",
        phLicense: "MED-123456",
        spec: "Specialization",
        phSpec: "Select Branch",
        optCardiology: "Cardiology",
        optNeurology: "Neurology",
        optPed: "Pediatrics",
        optOrtho: "Orthopedics",
        optGp: "General Practice",
        optDerm: "Dermatology",
        phPassMin: "Min 8 chars",
        confirmPass: "Confirm",
        phConfirm: "Repeat password",
        createDocAccount: "Create Doctor Account",
        docRegSuccess: "Doctor registration submitted successfully!",
        // Patient Form
        patName: "Full Name",
        phPatName: "Jane Doe",
        phPatEmail: "jane@example.com",
        dob: "Date of Birth",
        phDob: "DD/MM/YYYY",
        gender: "Gender",
        phGender: "Select Gender",
        optMale: "Male",
        optFemale: "Female",
        nationalId: "National ID",
        phNatId: "ID Number",
        createPatAccount: "Create Patient Account",
        patRegSuccess: "Patient registration submitted successfully!"
    },
    ar: {
        title: "رعاية صحية ذكية،",
        subtitle: "بكل بساطة من أجلك.",
        desc: "استمتع بنظام سجلات طبية إلكتروني موحد وآمن ومصمم لربط المتخصصين الطبيين بالمرضى بكل سهولة.",
        features: [
            "تاريخ طبي مشفر بالكامل",
            "جدولة فورية للمواعيد",
            "تتبع نتائج المختبر في الوقت الفعلي"
        ],
        footer: "© 2026 شركة ميدي كونيكت. جميع الحقوق محفوظة.",
        doctor: "طبيب",
        patient: "مريض",
        welcomeBack: "مرحباً بعودتك",
        createAccount: "إنشاء حساب ",
        createAccountSuffix: "",
        loginDesc: "أدخل بياناتك للوصول إلى بوابة الـ",
        loginDescSuffix: " الخاصة بك.",
        regDesc: "املأ البيانات أدناه لبدء رحلتك.",
        signIn: "تسجيل الدخول",
        newAccount: "حساب جديد",
        dontHave: "ليس لديك حساب؟ ",
        alreadyHave: "لديك حساب بالفعل؟ ",
        signUpNow: "سجل الآن",
        loginInstead: "تسجيل الدخول بدلاً من ذلك",
        langSwitchStr: "English",
        // LoginForm
        emailUser: "البريد الإلكتروني أو اسم المستخدم",
        phEmail: "أدخل بريدك الإلكتروني",
        password: "كلمة المرور",
        phPass: "••••••••",
        rememberMe: "تذكرني",
        forgotPwd: "هل نسيت كلمة المرور؟",
        signInSecurely: "تسجيل الدخول بأمان",
        loginSuccess: "تم تسجيل الدخول بنجاح!",
        // Doctor Form
        docName: "الاسم الكامل",
        phDocName: "د. أحمد",
        emailAddr: "البريد الإلكتروني",
        phDocEmail: "doctor@clinic.com",
        license: "رقم الترخيص",
        phLicense: "MED-123456",
        spec: "التخصص",
        phSpec: "اختر التخصص",
        optCardiology: "أمراض القلب",
        optNeurology: "طب الأعصاب",
        optPed: "طب الأطفال",
        optOrtho: "جراحة العظام",
        optGp: "طب عام",
        optDerm: "طب الجلدية",
        phPassMin: "8 أحرف كحد أدنى",
        confirmPass: "تأكيد كلمة المرور",
        phConfirm: "أعد كتابة كلمة المرور",
        createDocAccount: "إنشاء حساب طبيب",
        docRegSuccess: "تم تسجيل بيانات الطبيب بنجاح!",
        // Patient Form
        patName: "الاسم الكامل",
        phPatName: "نورة جمال",
        phPatEmail: "noura@example.com",
        dob: "تاريخ الميلاد",
        phDob: "يوم/شهر/سنة",
        gender: "الجنس",
        phGender: "اختر الجنس",
        optMale: "ذكر",
        optFemale: "أنثى",
        nationalId: "الرقم القومي",
        phNatId: "رقم الهوية",
        createPatAccount: "إنشاء حساب مريض",
        patRegSuccess: "تم تسجيل بيانات المريض بنجاح!"
    }
};

export default function App() {
    const [role, setRole] = useState('doctor');
    const [view, setView] = useState('login');
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    };

    const t = translations[language];

    return (
        <div className="min-h-screen w-full flex bg-slate-50 font-sans selection:bg-[#18537F]/30">
            {/* Left Panel - Branding & Visuals (Hidden on small screens) */}
            <div className="hidden lg:flex lg:w-5/12 xl:w-1/2 relative overflow-hidden bg-[#18537F] flex-col justify-between p-12 text-white">
                {/* Abstract Background Shapes */}
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

                {/* Brand Logo */}
                <div className="relative z-10 flex items-center space-x-3">
                    <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md border border-white/20">
                        <HeartPulse size={32} className="text-cyan-300" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white" dir="ltr">MediConnect <span className="text-cyan-300 font-extrabold text-xl ml-1">EHRS</span><span className="text-cyan-300">.</span></span>
                </div>

                {/* Main Value Proposition */}
                <div className="relative z-10 max-w-lg mt-auto mb-auto pt-16">
                    <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight mb-6">
                        {t.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">{t.subtitle}</span>
                    </h1>
                    <p className="text-blue-100 text-lg mb-10 leading-relaxed font-light">
                        {t.desc}
                    </p>

                    {/* Feature List */}
                    <div className="space-y-4">
                        {t.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3 text-blue-50">
                                <CheckCircle2 size={20} className="text-cyan-400" />
                                <span className="font-medium text-[15px]">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer info */}
                <div className="relative z-10 text-blue-200/80 text-sm font-medium">
                    {t.footer}
                </div>
            </div>

            {/* Right Panel - Auth Forms */}
            <div className="w-full lg:w-7/12 xl:w-1/2 flex flex-col relative h-screen overflow-y-auto bg-white lg:bg-transparent">
                
                {/* Top Header Section (Mobile Logo + Language Switcher) */}
                <div className="w-full p-6 sm:p-10 flex justify-between items-center shrink-0">
                    <div className="lg:opacity-0 flex items-center space-x-2">
                        <div className="bg-[#18537F] p-2 rounded-lg">
                            <HeartPulse size={24} className="text-white" />
                        </div>
                        <span className="text-xl font-bold text-slate-800" dir="ltr">MediConnect</span>
                    </div>

                    <button 
                        onClick={toggleLanguage}
                        className="flex items-center space-x-2 px-3 py-2 rounded-xl text-[#18537F] hover:bg-slate-100 transition-all active:scale-95 z-20"
                    >
                        <Globe size={22} strokeWidth={2.5} />
                        <span className="font-bold text-[16px] mt-0.5 tracking-wide" dir="auto">{t.langSwitchStr}</span>
                    </button>
                </div>

                {/* Form Container */}
                <div className="flex-1 w-full flex items-center justify-center p-6 sm:p-12 pb-20">
                    <div className="w-full max-w-md xl:max-w-lg">

                        {/* Role Toggle Switch */}
                        <div className="mb-10 bg-slate-100/80 p-1.5 rounded-2xl flex relative w-full shadow-inner border border-slate-200/50">
                            {/* Sliding Background */}
                            <div
                                className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm border border-slate-200/60 transition-all duration-300 ease-spring"
                                style={language === 'ar' 
                                    ? { right: role === 'patient' ? '6px' : 'calc(50%)' } 
                                    : { left: role === 'patient' ? '6px' : 'calc(50%)' }}
                            />

                            <button
                                onClick={() => setRole('doctor')}
                                className={`relative z-10 flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-xl font-semibold transition-colors duration-300 outline-none ${role === 'doctor' ? 'text-[#18537F]' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                <Stethoscope size={18} />
                                <span>{t.doctor}</span>
                            </button>
                            <button
                                onClick={() => setRole('patient')}
                                className={`relative z-10 flex-1 flex items-center justify-center space-x-2 py-3.5 rounded-xl font-semibold transition-colors duration-300 outline-none ${role === 'patient' ? 'text-[#18537F]' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                <UserIcon size={18} />
                                <span>{t.patient}</span>
                            </button>
                        </div>

                        {/* Form Header */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                                {view === 'login' ? t.welcomeBack : `${t.createAccount}${t[role]}${t.createAccountSuffix}`}
                            </h2>
                            <p className="text-slate-500 text-[15px]">
                                {view === 'login'
                                    ? `${t.loginDesc}${t[role]}${t.loginDescSuffix}`
                                    : t.regDesc}
                            </p>
                        </div>

                        {/* View Toggle (Tabs) */}
                        <div className="flex border-b border-slate-200 mb-8 w-full">
                            <button
                                onClick={() => setView('login')}
                                className={`pb-3.5 px-1 font-semibold text-sm transition-all duration-300 relative ${view === 'login' ? 'text-[#18537F]' : 'text-slate-400 hover:text-slate-600'} ${language === 'en' ? 'mr-8' : 'ml-8'}`}
                            >
                                {t.signIn}
                                {view === 'login' && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#18537F] rounded-t-full"></span>
                                )}
                            </button>
                            <button
                                onClick={() => setView('register')}
                                className={`pb-3.5 px-1 font-semibold text-sm transition-all duration-300 relative ${view === 'register' ? 'text-[#18537F]' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {t.newAccount}
                                {view === 'register' && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#18537F] rounded-t-full"></span>
                                )}
                            </button>
                        </div>

                        {/* Dynamic Forms Container */}
                        <div className="relative">
                            {view === 'login' ? (
                                <LoginForm t={t} language={language} />
                            ) : (
                                role === 'doctor' ? <DoctorRegisterForm t={t} language={language} /> : <PatientRegisterForm t={t} language={language} />
                            )}
                        </div>

                        {/* Bottom Switcher */}
                        <div className="mt-8 text-center">
                            <p className="text-sm text-slate-500">
                                {view === 'login' ? t.dontHave : t.alreadyHave}
                                <button
                                    onClick={() => setView(view === 'login' ? 'register' : 'login')}
                                    className="font-bold text-[#18537F] hover:opacity-80 hover:underline transition-colors focus:outline-none"
                                >
                                    {view === 'login' ? t.signUpNow : t.loginInstead}
                                </button>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

// Reusable Input Component
const InputField = ({ icon: Icon, type = 'text', placeholder, label, options, language }) => {
    return (
        <div className="mb-5 group relative">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 opacity-80">{label}</label>
            <div className="relative flex items-center">
                <div className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} text-slate-400 group-focus-within:text-[#18537F] transition-colors pointer-events-none`}>
                    <Icon size={18} strokeWidth={2.5} />
                </div>
                {options ? (
                    <div className="relative w-full">
                        <select
                            required
                            className={`w-full ${language === 'ar' ? 'pr-12 pl-10' : 'pl-12 pr-10'} py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:ring-[3px] focus:ring-[#18537F]/20 focus:border-[#18537F] transition-all outline-none text-slate-800 appearance-none font-medium shadow-sm cursor-pointer`}
                            defaultValue=""
                        >
                            <option value="" disabled>{placeholder}</option>
                            {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                        </select>
                        <div className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-[#18537F] transition-colors`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                    </div>
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        required
                        className={`w-full ${language === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:ring-[3px] focus:ring-[#18537F]/20 focus:border-[#18537F] transition-all outline-none text-slate-800 font-medium shadow-sm placeholder-slate-400`}
                    />
                )}
            </div>
        </div>
    );
};

const LoginForm = ({ t, language }) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards">
            <form onSubmit={(e) => {
                e.preventDefault();
                alert(t.loginSuccess);
            }}>
                <InputField icon={Mail} label={t.emailUser} placeholder={t.phEmail} language={language} />
                <InputField icon={Lock} label={t.password} type="password" placeholder={t.phPass} language={language} />

                <div className="flex items-center justify-between mt-6 mb-8">
                    <label className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                            <input type="checkbox" className="peer w-5 h-5 rounded-[6px] border-slate-300 text-[#18537F] focus:ring-[#18537F]/30 transition-shadow cursor-pointer appearance-none checked:bg-[#18537F] checked:border-[#18537F] bg-slate-100 border" />
                            <CheckCircle2 size={14} className="absolute text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{t.rememberMe}</span>
                    </label>
                    <a href="#" className="text-sm font-semibold text-[#18537F] hover:opacity-80 hover:underline transition-all">
                        {t.forgotPwd}
                    </a>
                </div>

                <button className="group w-full bg-[#18537F] hover:bg-[#124065] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#18537F]/30 hover:shadow-[#18537F]/50 active:scale-[0.98] text-[15px]">
                    {t.signInSecurely}
                    <ArrowRight className={`opacity-70 group-hover:opacity-100 transition-all ${language === 'ar' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'}`} size={18} />
                </button>
            </form>
        </div>
    );
};

const DoctorRegisterForm = ({ t, language }) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards">
            <form onSubmit={(e) => {
                e.preventDefault();
                alert(t.docRegSuccess);
            }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                    <InputField icon={UserIcon} label={t.docName} placeholder={t.phDocName} language={language} />
                    <InputField icon={Mail} label={t.emailAddr} type="email" placeholder={t.phDocEmail} language={language} />
                    <InputField icon={CreditCard} label={t.license} placeholder={t.phLicense} language={language} />
                    <InputField
                        icon={Activity}
                        label={t.spec}
                        placeholder={t.phSpec}
                        options={[t.optCardiology, t.optNeurology, t.optPed, t.optOrtho, t.optGp, t.optDerm]}
                        language={language}
                    />
                    <InputField icon={Lock} label={t.password} type="password" placeholder={t.phPassMin} language={language} />
                    <InputField icon={ShieldCheck} label={t.confirmPass} type="password" placeholder={t.phConfirm} language={language} />
                </div>

                <button className="w-full mt-2 bg-[#18537F] hover:bg-[#124065] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#18537F]/30 hover:shadow-[#18537F]/50 active:scale-[0.98] text-[15px]">
                    <UserPlus className={`opacity-80 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} size={18} />
                    {t.createDocAccount}
                </button>
            </form>
        </div>
    );
};

const PatientRegisterForm = ({ t, language }) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards">
            <form onSubmit={(e) => {
                e.preventDefault();
                alert(t.patRegSuccess);
            }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                    <InputField icon={UserIcon} label={t.patName} placeholder={t.phPatName} language={language} />
                    <InputField icon={Mail} label={t.emailAddr} type="email" placeholder={t.phPatEmail} language={language} />
                    <InputField icon={Calendar} label={t.dob} type="date" placeholder={t.phDob} language={language} />
                    <InputField
                        icon={UserIcon}
                        label={t.gender}
                        placeholder={t.phGender}
                        options={[t.optMale, t.optFemale]}
                        language={language}
                    />
                    <InputField icon={CreditCard} label={t.nationalId} placeholder={t.phNatId} language={language} />
                    <div className="hidden sm:block"></div>
                    <InputField icon={Lock} label={t.password} type="password" placeholder={t.phPassMin} language={language} />
                    <InputField icon={ShieldCheck} label={t.confirmPass} type="password" placeholder={t.phConfirm} language={language} />
                </div>

                <button className="w-full mt-2 bg-[#18537F] hover:bg-[#124065] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#18537F]/30 hover:shadow-[#18537F]/50 active:scale-[0.98] text-[15px]">
                    <UserPlus className={`opacity-80 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} size={18} />
                    {t.createPatAccount}
                </button>
            </form>
        </div>
    );
};
