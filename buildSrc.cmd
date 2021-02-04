rmdir build_all /s /q

For /L %%a in (1,1,10) DO (
    SET REACT_APP_STYLE=%%a&&react-scripts build&& xcopy /Y /E /I build build_all\style%%a
)

@REM SET REACT_APP_STYLE=10&&react-scripts build&& xcopy /Y /E /I build build_all\style10