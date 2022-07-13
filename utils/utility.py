def json_return(reports, success, msg):
    if isinstance(reports, list):
        reports = reports
    else:
        reports = [reports]
    return {
        'data': reports, 
        'success': success, 
        'msg': msg,
        'count': len(reports)
    }
    